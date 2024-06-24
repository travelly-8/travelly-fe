import { IReviewData } from '@/pages/products-detail/components/product-review/review/Review.type'
import { IProductDetail } from '@/store/product-slice/product-slice.type'

export interface IReviewProductCardProps {
  reviewData?: IReviewData
  productDetail: IProductDetail
  isCommentMode?: boolean
  isReviewList?: boolean
}
