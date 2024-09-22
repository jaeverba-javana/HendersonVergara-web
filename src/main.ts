import { createSSRApp } from 'vue'
import App from './App.vue'
import jv from "./plugins/jv.ts";
import {createPinia} from "pinia";

export function createApp() {
  const app = createSSRApp(App)
      app.use(jv)
    app.use(createPinia())
  return { app }
}
