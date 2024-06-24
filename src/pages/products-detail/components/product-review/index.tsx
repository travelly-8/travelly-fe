import Review from '@/pages/products-detail/components/product-review/review'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'

import { IProductDetail } from './review/Review.type'

interface IProductReviewsProps {
  id?: string
  productDetail: IProductDetail
  reviewData: IReviewDetailData[]
  handleSheetDispatch: (name: string) => void
  handlePhotoReviewsClick: () => void
  totalElements: number
  setReviewForEdit?: (editId: number) => void
}

const ProductReviews = ({
  productDetail,
  id,
  reviewData,
  totalElements,
  handleSheetDispatch,
  handlePhotoReviewsClick,
  setReviewForEdit,
}: IProductReviewsProps) => {
  const reviewImg = reviewData?.reduce<string[]>(
    (acc, review) => acc.concat(review.reviewImages),
    [],
  )

  return (
    <Review
      id={id}
      reviewCnt={totalElements}
      productDetail={productDetail}
      reviewImg={reviewImg}
      reviewData={reviewData}
      onOrderClick={() => handleSheetDispatch('review-order-sheet')}
      onEditClick={() => handleSheetDispatch('edit-sheet')}
      onPhotoReviewsClick={handlePhotoReviewsClick}
      setReviewForEdit={setReviewForEdit}
    />
  )
}

export default ProductReviews
