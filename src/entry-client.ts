import './style.css'
import { createApp } from './main'
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./router";

const { app } = createApp()

app
    .use(createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }))

app.mount('#app')
