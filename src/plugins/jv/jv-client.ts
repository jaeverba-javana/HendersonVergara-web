import {CookieManager} from "../../Utils.ts";
import jvCore from "./jv-core.ts";

import {IN_BROWSER} from "./utils";
import {createDisplay, DisplaySymbol} from "./composables/display.ts";

export default function createJvClient() {


    const install = (app: any) => {
        const hooks: (() => void)[] = []

        createDisplay()

        // app.provide(DisplaySymbol, displa)

        function getCurrentWidth(width: number): string {
            if (width < 240) return "xs"
            else if (width < 360) return "s"
            else if (width < 480) return "sm"
            else if (width < 768) return "md"
            else if (width < 1024) return "lg"
            else if (width < 1440) return "l"
            else if (width < 1920) return "xl"
            else return "xxl"
        }

        app.mixin({
            data: (): {} => ({
                ...jvCore.data,
                rf: CookieManager.exists('env') ?
                    '' : 'https://hendersonvergarap.blob.core.windows.net/resources',

                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    size: getCurrentWidth(window.innerWidth)
                },

                onResize: {
                    add(hook: () => void) {
                        hooks.push(hook)
                    }
                }
            }),

            methods: {},

            created() {
                window.addEventListener('resize', () => {
                    this.screen.width = window.innerWidth
                    this.screen.height = window.innerHeight
                    this.screen.size = getCurrentWidth(this.screen.width)

                    console.log(this.screen.width)

                    hooks.forEach(hook => hook())
                })
            },
        })
    }

    return {
        install
    }
}
