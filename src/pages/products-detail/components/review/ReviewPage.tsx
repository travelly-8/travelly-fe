import comment from '@/assets/products-detail/comment.svg'
import like from '@/assets/products-detail/like.svg'
import Rating from '@/pages/review/components/rating'

import * as S from './Review.style'

import type { IReviewPageProps } from './Review.type'

const ReviewPage: React.FC<IReviewPageProps> = ({
  reviewData,
  onEditClick,
  canComment = true,
}) => {
  const data = reviewData.data

  return (
    <S.ReviewContent>
      <S.ProfileHeader>
        <S.ProfileImg src={data.reviewUserImage} alt="프로필 이미지" />
        <S.ProfileNameWrapper>
          <S.ProfileHeaderWrapper>
            <S.BlackText>{data.reviewUserNickname}</S.BlackText>
            <S.EditKebab onClick={onEditClick} />
          </S.ProfileHeaderWrapper>
          <S.RatingWrapper>
            <Rating readOnly score={data.rating} />
            {/* <img src={star} alt="별점" /> */}
            <S.GrayText>{data.reviewDate}</S.GrayText>
          </S.RatingWrapper>
        </S.ProfileNameWrapper>
      </S.ProfileHeader>
      <S.DescriptionWrapper>
        {data.reviewImages?.length > 0 && (
          <S.ReviewImgContainer>
            {data.reviewImages.map((image) => (
              <S.ReviewImg key={image} src={image} alt="리뷰 이미지" />
            ))}
          </S.ReviewImgContainer>
        )}
        <S.BlackText>{data.reviewContent}</S.BlackText>
      </S.DescriptionWrapper>
      <S.LikeComment>
        <S.LikeCommentWrapper>
          <S.IconS src={like} alt="좋아요" />
          <S.BlackText>{data.likeCount}</S.BlackText>
        </S.LikeCommentWrapper>
        {canComment && (
          <S.LikeCommentWrapper>
            <S.IconS src={comment} alt="댓글" />
            <S.GrayText>댓글 </S.GrayText>
            <S.BlackText>{data.comments.length}</S.BlackText>
          </S.LikeCommentWrapper>
        )}
      </S.LikeComment>
    </S.ReviewContent>
  )
}

export default ReviewPage
