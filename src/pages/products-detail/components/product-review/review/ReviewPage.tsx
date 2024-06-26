import { useEffect, useState } from 'react'

import { getMemberProfile } from '@/api/myAPI.ts'
import defaultUser from '@/assets/common/default-user.svg'
import kebab from '@/assets/common/kebab.svg'
import comment from '@/assets/products-detail/comment.svg'
import like from '@/assets/products-detail/like.svg'
import Rating from '@/pages/review/components/rating'
import { IGetMemberProfile } from '@/types/getMemberData.type.ts'

import * as S from './Review.style'

import type { IReviewPageProps } from './Review.type'

const ReviewPage: React.FC<IReviewPageProps> = ({
  reviewData,
  onEditClick,
  canComment = true,
}) => {
  const [myInfo, setMyInfo] = useState<IGetMemberProfile>()

  const kebabClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation()
    onEditClick()
  }

  const getMyInfo = async () => {
    const res = await getMemberProfile()
    const data = res.data
    setMyInfo(data)
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      getMyInfo()
    }
  }, [])

  const isMyReview = reviewData.reviewUserNickname === myInfo?.nickname

  return (
    <S.ReviewContent>
      <S.ProfileHeader>
        <S.ProfileImg
          src={reviewData.reviewUserImage || defaultUser}
          alt="프로필 이미지"
          onError={(e) => {
            if (e.target instanceof HTMLImageElement) e.target.src = defaultUser
          }}
        />
        <S.ProfileNameWrapper>
          <S.ProfileHeaderWrapper>
            <S.BlackText>{reviewData.reviewUserNickname}</S.BlackText>
            {isMyReview && (
              <S.EditKebab
                src={kebab}
                alt="리뷰 수정/삭제"
                onClick={kebabClick}
              />
            )}
          </S.ProfileHeaderWrapper>
          <S.RatingWrapper>
            <Rating readOnly score={reviewData.rating} />
            {/* <img src={star} alt="별점" /> */}
            <S.GrayText>{reviewData.reviewDate}</S.GrayText>
          </S.RatingWrapper>
        </S.ProfileNameWrapper>
      </S.ProfileHeader>
      <S.DescriptionWrapper>
        {reviewData.reviewImages?.length > 0 && (
          <S.ReviewImgContainer>
            {reviewData.reviewImages.map((image) => (
              <S.ReviewImg key={image} src={image} alt="리뷰 이미지" />
            ))}
          </S.ReviewImgContainer>
        )}
        <S.BlackText>{reviewData.reviewContent}</S.BlackText>
      </S.DescriptionWrapper>
      <S.LikeComment>
        <S.LikeCommentWrapper>
          <S.IconS src={like} alt="좋아요" />
          <S.BlackText>{reviewData.likeCount}</S.BlackText>
        </S.LikeCommentWrapper>
        {canComment && (
          <S.LikeCommentWrapper>
            <S.IconS src={comment} alt="댓글" />
            <S.GrayText>댓글 </S.GrayText>
            <S.BlackText>{reviewData.comments?.length}</S.BlackText>
          </S.LikeCommentWrapper>
        )}
      </S.LikeComment>
    </S.ReviewContent>
  )
}
export default ReviewPage
