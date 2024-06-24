import { IProductDetail } from '@/store/product-slice/product-slice.type'

export interface IReviewProductCardProps {
  productId?: string | undefined
  reviewId?: string | undefined
  productDetail: IProductDetail
  isCommentMode?: boolean
  isReviewList?: boolean
}
