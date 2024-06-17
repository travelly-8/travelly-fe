import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import { IOperationDays } from '@/types/postProductData.type'

export interface IProductDetail {
  id: number
  address: string
  cityCode: string
  detailAddress: string
  homepage: string
  images: { url: string; order: number }[]
  name: string
  operationDays: IOperationDays[]
  description: string
  rating: number
  reviewCount: number
  phoneNumber: string
  ticketDto: Array<{ price: number }>
  reviews: IReviewDetailData[]
}

export interface IProductState {
  detail: IProductDetail | null
}
