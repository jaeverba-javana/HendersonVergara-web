import './style.css'
import { createApp } from './main'
import {createRouter, createWebHistory} from "vue-router";
import {createPinia} from "pinia";
import {routes} from "./router";
import jv from "@/plugins/jv";

const { app } = createApp()

app
    .use(createPinia())
    .use(createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }))

app.mount('#app')
