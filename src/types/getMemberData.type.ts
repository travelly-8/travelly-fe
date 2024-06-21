import { IProductCardData } from '@components/product-card/ProductCard.type'

import { IOperationDays } from './postProductData.type'

export interface IGetMemberProfileResponse {
  data: IGetMemberProfile
}

export interface IGetMemberProfile {
  email: string
  nickname: string
  imageUrl: string
  type: 'local' | 'social'
  point: number
}

export interface IGetTravellyProfileResponse {
  data: IGetTravellyProfile
}

export interface IGetTravellyProfile {
  nickname: string
  email: string
  imageUrl: string
  point: number
  notResponseCount: 0
  newReservationCount: 0
  products: IProducts[]
}

export interface IProducts extends IProductCardData {
  detailAddress?: string
  price?: number
}

export interface IImage {
  url: string
  order: number
}

export interface IGetTravellerProfileResponse {
  data: IGetTravellerProfile
}

export interface IGetTravellerProfile {
  nickname: string
  email: string
  imageUrl: string
  point: number
  remainReviewCount: number
  notPassedReservations: number
  recentProducts: IProducts[]
}

export type ProfileByRoleType = IGetTravellerProfile & IGetTravellyProfile

export interface IGetTravellyReviewResponse {
  data: IGetTravellyReview
}

export interface IGetTravellyReview {
  nickname: string
  email: string
  imageUrl: string
  reviewWithProducts: IReviewWithProduct[]
  commentWithProducts: ICommentWithProduct[]
}

export interface IReviewWithProduct {
  productId: number
  productName: string
  images: IImage[]
  reviewId: number
  reviewerName: string
  createdDate: string
}

export interface ICommentWithProduct {
  productId: number
  productName: string
  productPrice: number
  images: IImage[]
  operationDays: IOperationDays[]
  reviewId: number
}
