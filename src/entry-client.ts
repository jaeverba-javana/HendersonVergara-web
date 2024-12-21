import './style.sass'
import { createApp } from './main'
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./router";
import jvClient from "./plugins/jv/jv-client.ts";

const { app } = createApp()

app
    .use(createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }))
    .use(jvClient())
    .mount('#app')
