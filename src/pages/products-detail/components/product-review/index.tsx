import Review from '@/pages/products-detail/components/product-review/review'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'

import { IProductDetail } from './review/Review.type'

interface IProductReviewsProps {
  productDetail: IProductDetail
  reviewData: IReviewDetailData[]
  handleSheetDispatch: (name: string) => void
  handlePhotoReviewsClick: () => void
  totalElements: number
}

const ProductReviews = ({
  productDetail,
  reviewData,
  totalElements,
  handleSheetDispatch,
  handlePhotoReviewsClick,
}: IProductReviewsProps) => {
  const reviewImg = reviewData?.reduce<string[]>(
    (acc, review) => acc.concat(review.reviewImages),
    [],
  )

  return (
    <Review
      productDetail={productDetail}
      reviewCnt={totalElements}
      reviewImg={reviewImg}
      reviewData={reviewData}
      onOrderClick={() => handleSheetDispatch('review-order-sheet')}
      onEditClick={() => handleSheetDispatch('edit-sheet')}
      onPhotoReviewsClick={handlePhotoReviewsClick}
    />
  )
}

export default ProductReviews
