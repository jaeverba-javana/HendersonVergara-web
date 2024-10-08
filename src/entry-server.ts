import {  renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import {createMemoryHistory, createRouter} from "vue-router";
import {routes} from "./router";
import {createSSRApp, h} from "vue";

// export function render() {
export async function render(url: string): Promise<string> {
  const { app } = createApp()

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugins-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.

  const router = createRouter({
    history: createMemoryHistory(),
    routes
  })

  app.use(router)

  const ctx = {}
  // const stream = renderToWebStream(app, ctx)

  await router.push(url)
  await router.isReady()

  const html = await renderToString(app, ctx)

  const head = await renderToString(
      createSSRApp({
        setup() {
          const {meta} = router.resolve(url);

          const elements = []

          for (const metaKey in meta) {
            if (typeof meta[metaKey] === "string") {
              elements.push(h(metaKey, {}, meta[metaKey]))
            } else if (meta[metaKey] instanceof Array) {
              for (const elementElement of meta[metaKey]) {
                elements.push(h(metaKey, elementElement, []))
              }
            }
          }

          return () => elements
        }
      })
      , ctx)

  return { head, html }
}
