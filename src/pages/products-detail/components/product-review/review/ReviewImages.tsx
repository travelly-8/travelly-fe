import * as S from './Review.style'

interface ReviewImagesProps {
  reviewCnt: number
  reviewImg?: string[]
  onPhotoReviewsClick?: () => void
}

const ReviewImages: React.FC<ReviewImagesProps> = ({
  reviewCnt,
  reviewImg = [],
  onPhotoReviewsClick,
}) => {
  if (reviewImg.length <= 3) {
    return reviewImg?.map((photo) => (
      <S.ReviewImg key={photo} src={photo} alt="리뷰 이미지" />
    ))
  } else {
    return (
      <>
        <S.ReviewImg src={reviewImg?.[0]} alt="리뷰 이미지" />
        <S.ReviewImg src={reviewImg?.[1]} alt="리뷰 이미지" />
        <S.LastReviewImg onClick={onPhotoReviewsClick}>
          <S.ReviewImg src={reviewImg?.[2]} alt="리뷰 이미지" />
          <S.ReviewImgBackground>+{reviewCnt - 2}</S.ReviewImgBackground>
        </S.LastReviewImg>
      </>
    )
  }
}

export default ReviewImages
