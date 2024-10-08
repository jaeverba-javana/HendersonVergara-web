import {CookieManager} from "../Utils.ts";

const jv: {
    install: (app: any) => void
} = {
    install: (app: any) => {
        const p = (typeof process !== 'undefined')
            app.mixin({
                data: () => ({
                    process: p,
                    rf: p?
                        (process.env.NODE_ENV === 'production')?
                            "https://hendersonvergarap.blob.core.windows.net/resources" : ""
                        :
                        CookieManager.exists('env') ?
                            '' : 'https://hendersonvergarap.blob.core.windows.net/resources'
                })
            })
    }
}

export default jv;