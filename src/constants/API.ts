export const API_PRODUCTS = Object.freeze({
  PRODUCTS: '/products/',
  PRODUCTS_DETAIL: (productId: number | undefined) => `/products/${productId}`,
})

export const API_MEMBER = Object.freeze({
  MY: '/my',
  MY_PROFILE: '/my/profile',
  MY_NICKNAME: (nickname: string) => `/my/profile?nickname=${nickname}`,
  MY_PROFILE_IMG: '/my/profile/image',
  MY_PROFILE_IMG_RESET: '/my/profile/image/default',
  MY_PASSWORD: '/my/profile/password',
})

export const API_AUTH = Object.freeze({
  ROLE: (role: string) => `/auth/login/${role}`,
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  SOCIALLOGIN: (registrationId: string) => `/auth/login/${registrationId}`,
  REISSUE: '/auth/login/reissue',
  FINDID: '/auth/login/find',
  LOGOUT: '/auth/logout',
  LEAVE: '/auth/leave',
})

export const API_REVIEW = Object.freeze({
  POST_REVIEW: (productId: number) => `/review/${productId}`,
  REVIEW_DETAIL: (productId: number, reviewId: number) =>
    `/review/${productId}/${reviewId}`,
  COMMENT: (reviewId: number, commentId: number) =>
    `/comment/${reviewId}/${commentId}`,
})
