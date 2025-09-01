class Cookie {

    private readonly key_value: string = "";
    private path: string = "";
    private domain: string = "";
    private expires: Date = "";
    private maxAge: number = "";
    private secure: boolean = "";
    private httpOnly: boolean = "";
    private sameSite: "";

    constructor(key: string, value: string) {
        if ((key && value) || value === "") this.key_value = key + "=" + value;
        else if (!key && !value) throw new Error("key and value are required");
        else if (!key) throw new Error("key is required");
        else if (!value) throw new Error("value is required");
        else throw new Error("Unknown error");
    }

    setPath(path: string = ""): this{
        this.path = path? ";path=" + path : "";
        return this;
    }

    setDomain(domain: string = ""): this{
        this.domain = domain? ";domain=" + domain : "";
        return this;
    }

    setExpires(expires: Date = new Date()): this{
        this.expires = expires? ";expires=" + expires.toUTCString() : "";
        return this;
    }

    setMaxAge(maxAge: number = 1): this{
        this.maxAge = maxAge? ";Max-Age=" + maxAge : "";
        return this;
    }

    setSecure(secure: boolean = false): this{
        this.secure = secure? ";secure" : "";
        return this;
    }

    setHttpOnly(httpOnly: boolean = false): this{
        this.httpOnly = httpOnly? ";HttpOnly" : "";
        return this;
    }

    setSameSite(sameSite: "strict" | "lax" | "none" = "strict"): this{
        this.sameSite = sameSite? ";SameSite=" + sameSite : "";
        return this;
    }

    set() {
        document.cookie = this.key_value + this.path + this.domain + this.maxAge + this.expires + this.secure + this.sameSite + this.httpOnly;
    }
}

export class CookieManager {
    static add(values: ICookie):boolean {
        let key_value;

        try {
            new Cookie(values.key, values.value)
                .setPath(values.path)
                .setDomain(values.domain)
                .setExpires(values.expires)
                .setMaxAge(values.maxAge)
                .setSecure(values.secure)
                .setHttpOnly(values.httpOnly)
                .setSameSite(values.sameSite)
                .set();

            return true;
        } catch (e) {
            console.error("Cookie creation error: "+e);
            return false;
        }
    }

    static get(key: string): string | null {
        let value: string | null;
        try {
            value = document.cookie.split(';').find(row => row.trim().startsWith(key + '='))?.split('=')[1] ?? null;
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