import fs from 'node:fs/promises'
import express from 'express'
import {IS_PRODUCTION, PORT, BASE} from "./utils/constants.js";

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
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(BASE, sirv('./dist/client', { extensions: [] }))
}

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

    const { stream } = render(url, ssrManifest)

    const [htmlStart, htmlEnd] = template.split('<!--app-html-->')

    res.status(200).set({ 'Content-Type': 'text/html' })

    res.write(htmlStart)
    for await (const chunk of stream) {
      if (res.closed) break
      res.write(chunk)
    }
    res.write(htmlEnd)
    res.end()
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

export default app;
