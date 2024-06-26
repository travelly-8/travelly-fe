import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import { IOperationDays } from '@/types/postProductData.type'

import { ISheetComponents } from '../../sheet-renderer/SheetRenderer.type'

export interface IProductDetail {
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
  ticketDto: { price: number }[]
  reviews: IReviewDetailData
  productId?: number
}

export interface IProductInfoProps extends IProductBasicInfoProps {
  handleSheetDispatch: (name: keyof ISheetComponents) => void
  onReviewClick: () => void
}

export interface IProductBasicInfoProps {
  productDetail: IProductDetail | null
}

export interface IReviewProps {
  productDetail: IProductDetail
  id?: string
  reviewCnt: number
  reviewImg?: string[]
  reviewData: IReviewDetailData[]
  onOrderClick: () => void
  onEditClick: () => void
  onPhotoReviewsClick?: () => void
}

export interface IReviewPageProps {
  reviewData: IReviewDetailData
  onEditClick: () => void
  canComment?: boolean
}

export interface IReviewData {
  image: string[]
  name: string
  profileImage: string
  rating: number
  reviewUserNickname: string
  reviewDate: string
  reviewText: string
  commentCnt: number
  likeCnt: number
}
