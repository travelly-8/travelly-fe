import { IProductDetail } from '@/store/product-slice/product-slice.type'

export interface IReviewProductCardProps {
  reviewId?: string | undefined
  productDetail: IProductDetail
  isCommentMode?: boolean
  isReviewList?: boolean
}
