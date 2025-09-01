import {IN_BROWSER, SUPPORTS_TOUCH, mergeDeep} from "../utils";
import {platform, type} from "node:os";

import {reactive, shallowRef, Ref, toRefs, watchEffect} from "vue";

export const breakpoints = ['xxs', 'xs', 'sm', 'md', 'lg', 'l', 'xl', 'xxl'] as const; // no xs

export const DisplaySymbol = Symbol.for('jaeverba:display');

const defaultDisplayOptions: IDisplayOptions = {
    mobileBreakpoint: 'lg',
    thresholds: {
        xxs: 0,
        xs: 240,
        sm: 360,
        md: 480,
        lg: 768,
        l: 1024,
        xl: 1440,
        xxl: 1920
    }
};

const parseDisplayOptions = (displayOptions: IDisplayOptions) => {
    let options = typeof displayOptions !== "undefined" ? displayOptions : defaultDisplayOptions;
    return mergeDeep(defaultDisplayOptions, options)
}

function getClientHeight(ssr: boolean): number {
    return IN_BROWSER && !ssr ?
        window.innerWidth : typeof ssrOptions === "object" && ssr.clientWidth || 0
}

function getClientWidth(ssr: boolean) {
    return IN_BROWSER && !ssr ?
        window.innerWidth : typeof ssr === "object" && ssr.clientWidth || 0
}

function getPlatform(ssr: boolean) {
    const userAgent: string = IN_BROWSER && !ssr? window.navigator.userAgent : "ssr"

    let match = (regexp) => RegExp(regexp).exec(userAgent)

    const android = match(/android/i)
    const ios = match(/iphone|ipad|ipod/i)
    const cordova = match(/cordova/i)
    const electron = match(/electron/i)
    const chrome = match(/chrome/i)
    const edge = match(/edge/i)
    const firefox = match(/firefox/i)
    const opera = match(/opera/i)
    const win = match(/win/i)
    const mac = match(/mac/i)
    const linux = match(/linux/i)

    return {
        android,
        ios,
        cordova,
        electron,
        chrome,
        edge,
        firefox,
        opera,
        win,
        mac,
        linux,
        touch: SUPPORTS_TOUCH,
        ssr: userAgent === 'ssr'
    }
}

export function createDisplay(displayOptions: IDisplayOptions, ssr: boolean | undefined) {
    const {thresholds, mobileBreakpoint} = parseDisplayOptions(displayOptions);

    const width: Ref<number> = shallowRef(getClientWidth(ssr));
    const height: Ref<number> = shallowRef(getClientHeight(ssr));
    const platform: Ref<string> = shallowRef(getPlatform(ssr));
    const state = reactive({})

    function updateSize() {
        width.value = getClientWidth();
        height.value = getClientHeight();
    }

    function update() {
        updateSize();
        platform.value = getPlatform();
    }

    watchEffect(() => {
        const xxs = width.value < thresholds.xs;
        const xs = width.value < thresholds.sm && !xxs;
        const sm = width.value < thresholds.md && !(xs || xxs);
        const md = width.value < thresholds.lg && !(sm || xs || xxs);
        const lg = width.value < thresholds.l && !(md || sm || xs || xxs);
        const l = width.value < thresholds.xl && !(lg || md || sm || xs || xxs);
        const xl = width.value < thresholds.xxl && !(l || lg || md || sm || xs || xxs);
        const xxl = width.value >= thresholds.xxl;
        const name = xxs ? 'xxs' : xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : l ? 'l' : xl ? 'xl' : 'xxl';
        const breakpointValue = typeof mobileBreakpoint === 'number' ? mobileBreakpoint : thresholds[mobileBreakpoint];
        const mobile = width.value < breakpointValue;

        state.xxs = xxs;
        state.xs = xs;
        state.sm = sm;
        state.md = md;
        state.lg = lg;
        state.l = l;
        state.xl = xl;
        state.xxl = xxl;

        state.xsAndUp = !xxs;
        state.xsAndDown = !(sm || md || lg || l || xl || xxl);
        state.smAndUp = !(xxs || xs);
        state.smAndDown = !(md || lg || l || xl || xxl);
        state.mdAndUp = !(xxs || xs || sm);
        state.mdAndDown = !(lg || l || xl || xxl);
        state.lgAndUp = !(xxs || xs || sm || md);
        state.lgAndDown = !(l || xl || xxl);
        state.lAndUp = !(xxs || xs || sm || md || lg);
        state.lAndDown = !(xl || xxl);
        state.xlAndUp = !(xxs || xs || sm || md || lg || l);
        state.xlAndDown = !xxl;

        state.name = name;
        state.height = height.value;
        state.width = width.value;
        state.mobile = mobile;
        state.mobileBreakpoint = mobileBreakpoint;
        state.platform = platform.value;
        state.thresholds = thresholds;
    })

    if(IN_BROWSER) window.addEventListener('resize', updateSize, {passive: true});

    return {
        ...toRefs(state),
        update,
        ssr: !!ssr
    }
}

type Breakpoint = typeof breakpoints[number];

declare interface IDisplayOptions {
    mobileBreakpoint: Breakpoint,
    thresholds: {
        [key: Breakpoint]: number
    }
}

declare interface ISSROptions {
    ssrClientHeight?: number,
    ssrClientWidth?: number
}