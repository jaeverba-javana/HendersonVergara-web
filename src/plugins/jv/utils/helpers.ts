export function isPlainObject(obj): boolean {
    let proto;
    return obj !== null && typeof obj === 'object' && ((proto = Object.getPrototypeOf(obj)) === Object.prototype || proto === null);
}

export function mergeDeep<T = object>(): T {
    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let arrayFn = arguments.length > 2 ? arguments[2] : undefined;
    const out = {};
    for (const key in source) {
        out[key] = source[key];
    }
    for (const key in target) {
        const sourceProperty = source[key];
        const targetProperty = target[key];

        // Only continue deep merging if
        // both properties are plain objects
        if (isPlainObject(sourceProperty) && isPlainObject(targetProperty)) {
            out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
            continue;
        }
        if (arrayFn && Array.isArray(sourceProperty) && Array.isArray(targetProperty)) {
            out[key] = arrayFn(sourceProperty, targetProperty);
            continue;
        }
        out[key] = targetProperty;
    }
    return out;
}