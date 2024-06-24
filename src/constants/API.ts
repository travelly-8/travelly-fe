export const BASE_URL = 'https://travellykr.shop'

export const API_PRODUCTS = Object.freeze({
  PRODUCTS: '/products/',
  PRODUCTS_IMAGE: '/products/upload',
  PRODUCTS_DETAIL: (productId: number | undefined) => `/products/${productId}`,
  TOP_KEYWORDS: '/products/top-keywords',
  TOP_PRODUCTS: '/products/top-products',
})

export const API_MEMBER = Object.freeze({
  MY_PROFILE: '/my/profile',
  MY_TRAVELLY: '/my/travelly',
  MY_TRAVELLER: '/my/traveller',
  MY_NICKNAME: (nickname: string) => `/my/profile?nickname=${nickname}`,
  MY_PROFILE_IMG: '/my/profile/image',
  MY_PROFILE_IMG_RESET: '/my/profile/image/default',
  MY_PASSWORD: '/my/profile/password',
  MY_TRAVELLY_REVIEW: '/my/travelly/review',
})

export const API_AUTH = Object.freeze({
  ROLE: (role: string) => `/auth/login/${role}`,
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  SOCIALLOGIN: (registrationId: string) => `/auth/login/${registrationId}`,
  REISSUE: `${BASE_URL}/auth/login/reissue`,
  FINDID: '/auth/login/find',
  FINDPASSWORD: '/auth/login/find/password',
  LOGOUT: '/auth/logout',
  LEAVE: '/auth/leave',
})

export const API_REVIEW = Object.freeze({
  POST_REVIEW: (productId: number) => `/review/${productId}`,
  REVIEW_DETAIL: (productId: number, reviewId: number) =>
    `/review/${productId}/${reviewId}`,
  COMMENT: (reviewId: number, commentId: number) =>
    `/comment/${reviewId}/${commentId}`,
  REVIEWS: (productId: number) => `/review/product/${productId}`,
  DELETE_REVIEW: (reviewId: number) => `review/delete/${reviewId}`,
})

export const API_RESERVATION = Object.freeze({
  RESERVATION: (productId: number) => `/reservation/${productId}`,
  RESERVATION_MY: '/reservation/my',
  RESERVATION_DETAIL: (reservationId: number) =>
    `/reservation/${reservationId}`,
  RESERVATION_CANCEL: (reservationId: number) =>
    `/reservation/${reservationId}/cancel`,
})
