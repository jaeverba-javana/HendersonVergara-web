// eslint-disable-next-line no-undef
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
// eslint-disable-next-line no-undef
export const BASE = process.env.BASE || '/'
// eslint-disable-next-line no-undef
export const PORT = process.env.PORT || IS_PRODUCTION ? 80 : 5173