import {defineStore} from "pinia";

const useCookieStore = defineStore("cookie_store", {
    state: () => ({
        cookies: (function() {
            return document.cookie.split(";").reduce((acc, cookie) => {
                const [key, value] = cookie.split("=")
                acc[key.trim()] = value
                return acc
            }, {} as Record<string, string>)
        })()
    })
})