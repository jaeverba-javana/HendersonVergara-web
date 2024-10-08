import {CookieManager} from "../Utils.ts";

const jv: {
    install: (app: any, options: any) => void
} = {
    install: (app: any) => {
            app.mixin({
                data: () => ({
                    rf: (typeof process !== 'undefined')?
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