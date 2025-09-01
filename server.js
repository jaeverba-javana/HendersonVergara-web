import fs from 'node:fs/promises'
import express from 'express'
import userAgent from 'express-useragent'
import {IS_PRODUCTION, BASE, CONSOLE_COLORS as CC} from "./utils/constants.js";
import cookieParser from "cookie-parser";

// Cached production assets
const templateHtml = IS_PRODUCTION
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = IS_PRODUCTION
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()



// Add Vite or respective production middlewares
let vite
if (!IS_PRODUCTION) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    BASE
  })
  app.use(vite.middlewares)
}
else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(BASE, sirv('./dist/client', { extensions: [] }))
}

app.use(userAgent.express())

app.use(((await import('morgan')).default)((tokens, req, res) => {
  const status = (
      res.headersSent !== 'boolean'
          ? Boolean(res._header)
          : res.headersSent
  )
      ? res.statusCode
      : undefined

  const statusColor = status >= 500 ? CC.fg_red // red
      : status >= 400 ? CC.fg_yellow // yellow
          : status >= 300 ? CC.fg_cyan // cyan
              : status >= 200 ? CC.fg_green // green
                  : CC.reset // no color

  // console.log(req.useragent)

  return [
    tokens.date(req, res, "clf"), "-",
    CC.fg_cyan + tokens.method(req, res) + CC.reset,
    tokens.url(req),
    statusColor + status + CC.reset,
    "from: " + tokens.referrer(req, res), "-",
    // tokens['user-agent'](req, res), "-",
    req.useragent.browser + ":" + req.useragent.version, "-",
    tokens.res(req, res, 'content-length') || "none", '-',
    tokens['response-time'](req, res), 'ms',
    // tokens['total-time'](req, res)
  ].join(' ')
}))

app.use(cookieParser())

app.use("/api", express.json())

// const apiRoutes = await autoImportDefaultsFromDir('./routes/api')
// for (let apiRouteKey in apiRoutes) app.use("/api", apiRoutes[apiRouteKey])

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(BASE, '')

    let template
    let render
    if (!IS_PRODUCTION) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    // const { stream } = render(url, ssrManifest)
    const rendered = await render(url, ssrManifest)

    // console.log(rendered.html)

    // const [htmlStart, htmlEnd] = template.split('<!--app-html-->')
    const html = template
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    /*res.status(200).set({ 'Content-Type': 'text/html' })

    res.write(htmlStart)
    for await (const chunk of stream) {
      if (res.closed) break
      res.write(chunk)
    }
    res.write(htmlEnd)
    res.end()*/
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

export default app;
