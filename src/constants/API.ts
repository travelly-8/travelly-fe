export const API_PRODUCTS = Object.freeze({
  PRODUCTS: '/products/',
  PRODUCTS_DETAIL: (productId: number) => `/products/${productId}`,
})

export const API_MEMBER = Object.freeze({
  MY: '/my',
})

export const API_AUTH = Object.freeze({
  ROLE: (role: string) => `/auth/login/${role}`,
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  SOCIALLOGIN: (registrationId: string) => `/auth/login/${registrationId}`,
  REISSUE: '/auth/login/reissue',
  FINDID: '/auth/login/find',
})
