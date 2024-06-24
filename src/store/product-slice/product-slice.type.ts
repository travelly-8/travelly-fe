import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import { IOperationDays } from '@/types/postProductData.type'

export interface IProductDetail {
  id?: number
  productId?: number
  address: string
  cityCode: string
  detailAddress: string
  homepage: string
  images: { url: string; order: number }[]
  name: string
  productName?: string
  operationDays: IOperationDays[]
  description: string
  rating: number
  reviewCount: number
  phoneNumber: string
  ticketDto: Array<{ price: number }>
  reviews: IReviewDetailData
  reviewerName?: string
}

export interface IProductState {
  detail: IProductDetail | null
}
