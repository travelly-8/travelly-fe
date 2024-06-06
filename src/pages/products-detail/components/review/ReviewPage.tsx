import comment from '@/assets/products-detail/comment.svg'
import like from '@/assets/products-detail/like.svg'
import star from '@/assets/products-detail/starex.svg'

import * as S from './Review.style'

import type { IReviewPageProps } from './Review.type'

const ReviewPage: React.FC<IReviewPageProps> = ({ reviewData }) => {
  return (
    <S.ReviewContent>
      <S.ProfileHeader>
        <S.ProfileImg src={reviewData.profileImage} />
        <S.ProfileNameWrapper>
          <S.BlackText>닉네임</S.BlackText>
          <S.RatingWrapper>
            <img src={star} alt="별점" />
            <S.GrayText>{reviewData.reviewDay}</S.GrayText>
          </S.RatingWrapper>
        </S.ProfileNameWrapper>
      </S.ProfileHeader>
      <S.DescriptionWrapper>
        <S.ReviewImgContainer>
          <S.ReviewImg src={reviewData.image[0]} alt="리뷰 이미지" />
          <S.ReviewImg src={reviewData.image[1]} alt="리뷰 이미지" />
          <S.ReviewImg src={reviewData.image[2]} alt="리뷰 이미지" />
        </S.ReviewImgContainer>
        <S.BlackText>{reviewData.reviewText}</S.BlackText>
      </S.DescriptionWrapper>
      <S.LikeComment>
        <S.LikeCommentWrapper>
          <S.IconS src={like} alt="좋아요" />
          <S.BlackText>{reviewData.likeCnt}</S.BlackText>
        </S.LikeCommentWrapper>
        <S.LikeCommentWrapper>
          <S.IconS src={comment} alt="댓글" />
          <S.GrayText>댓글 </S.GrayText>
          <S.BlackText>{reviewData.commentCnt}</S.BlackText>
        </S.LikeCommentWrapper>
      </S.LikeComment>
    </S.ReviewContent>
  )
}

export default ReviewPage
