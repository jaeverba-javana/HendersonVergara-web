export class CookieManager {
    static add(values: ICookieManager.ICookie):boolean {
        let key_value;

        try {
            if ((values.key && values.value) || values.value === "") key_value = values.key + "=" + values.value;
            else if (!values.key && !values.value) throw new Error("key and value are required");
            else {
                if (!values.key) throw new Error("key is required");
                else if (!values.value) throw new Error("value is required");
                else throw new Error("Unknown error");
            }

            let path = values.path ? ";path=" + values.path : "";
            let domain = values.domain ? ";domain=" + values.domain : "";
            let expires = values.expires ? ";expires=" + values.expires.toUTCString() : "";
            let maxAge = values.maxAge ? ";Max-Age=" + values.maxAge : "";
            let secure = values.secure ? ";secure" : "";
            let sameSite = values.sameSite ? ";SameSite=" + values.sameSite : "";
            let httpOnly = values.httpOnly ? ";HttpOnly" : "";

            document.cookie = key_value + path + domain + maxAge + expires + secure + sameSite + httpOnly;
            return true;

        } catch (e) {
            console.error("Cookie creation error: "+e);
            return false;
        }
    }

    static get(key: string): string | null {
        let value: string | null = null;
        try {
            value = document.cookie.split(';').find(row => row.trim().startsWith(key + '='))?.split('=')[1] || null;
        } catch {
            value = null
        }
        return value
    }

    static exists(key: string): boolean {
        try {
            return new RegExp('\\b' + key + '\\b').test(document.cookie);
        } catch (e) {
            return false
        }

    }
}

namespace ICookieManager {
    interface ICookie {
        key: string,
        value: string,
        path?: string,
        domain?: string,
        expires?: Date,
        maxAge?: number,
        secure?: boolean,
        httpOnly?: boolean,
        sameSite?: "strict" | "lax" | "none"
    }
}