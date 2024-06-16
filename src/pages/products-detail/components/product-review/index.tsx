import Review from './review'

const ProductReviews = ({
  reviewData,
  handleSheetDispatch,
  handlePhotoReviewsClick,
}) => {
  const reviewImg = reviewData?.reduce(
    (acc, review) => acc.concat(review.reviewImages),
    [],
  )

  return (
    <Review
      reviewCnt={reviewData?.length}
      reviewImg={reviewImg}
      reviewData={reviewData}
      onOrderClick={() => handleSheetDispatch('review-order-sheet')}
      onEditClick={() => handleSheetDispatch('edit-sheet')}
      onPhotoReviewsClick={handlePhotoReviewsClick}
    />
  )
}

export default ProductReviews
