import { IReviewDetailData } from '@/types/getReviewDetailData.type'

export interface IProductDetail {
  address: string
  cityCode: string
  detailAddress: string
  homepage: string
  images: { url: string; order: number }[]
  name: string
  description: string
  rating: number
  reviewCount: number
  phoneNumber: string
  ticketDto: { price: number }[]
}

export interface IReviewProps {
  reviewCnt: number
  reviewImg?: string[]
  reviewData: IReviewData[]
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
  reviewDay: string
  reviewText: string
  commentCnt: number
  likeCnt: number
}
