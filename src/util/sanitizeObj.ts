export function sanitizeEmptyStrings<T extends Record<string, unknown>>(obj: T): T {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        Object.keys(obj).forEach(key => {
            if (obj[key] === "") {
                delete obj[key];
            }
        });
    }
    return obj;
}