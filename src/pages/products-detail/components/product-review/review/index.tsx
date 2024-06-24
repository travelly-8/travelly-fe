import { useState } from 'react'

import edit from '@/assets/products-detail/edit.svg'
import sort from '@/assets/products-detail/sort.svg'
import ReviewImages from '@/pages/products-detail/components/product-review/review/ReviewImages'
import ReviewPage from '@/pages/products-detail/components/product-review/review/ReviewPage.tsx'
import { IReviewDetailData } from '@/types/getReviewDetailData.type.ts'

import CheckBox from '@components/check-box'
import { useNavigate } from 'react-router-dom'

import * as S from './Review.style'

import type { IReviewProps } from './Review.type'

const Review: React.FC<IReviewProps> = ({
  productDetail,
  id,
  reviewCnt,
  reviewImg,
  reviewData,
  onOrderClick,
  onEditClick,
  onPhotoReviewsClick,
}) => {
  const [isRecentVisitChecked, setIsRecentVisitChecked] = useState(false)

  const handleSetGetAccountChecked = (isChecked: boolean) => {
    setIsRecentVisitChecked(isChecked)
  }

  const navigate = useNavigate()

  const handleHeaderClick = () => {
    navigate('/review/list')
  }

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    navigate('/review/write', { state: { productDetail } })
  }

  const handleNavigation = (
    event: React.MouseEvent,
    productId: string,
    reviewId: number,
  ) => {
    event.stopPropagation()
    navigate(`/review/${productId}/${reviewId}`, { state: { productDetail } })
  }

  return (
    <S.ReviewContainer id={id}>
      <S.ReviewHeader>
        <S.ReviewTitle onClick={handleHeaderClick}>
          <S.ReviewCntWrapper>
            <S.ReviewTitleText>후기</S.ReviewTitleText>
            <S.ReviewCntText>{reviewCnt}</S.ReviewCntText>
          </S.ReviewCntWrapper>
          <S.Icon src={edit} alt="리뷰 수정" onClick={handleIconClick} />
        </S.ReviewTitle>
        <S.ReviewCheckBox>
          <S.CheckBox>
            <S.CheckBoxWrapper>
              <CheckBox
                text="최근 방문"
                onChange={handleSetGetAccountChecked}
              />
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <CheckBox
                text="사진/동영상"
                onChange={handleSetGetAccountChecked}
              />
            </S.CheckBoxWrapper>
          </S.CheckBox>
          <S.SortWrapper onClick={onOrderClick}>
            <S.GrayText>정렬</S.GrayText>
            <S.IconSort src={sort} alt="정렬" />
          </S.SortWrapper>
        </S.ReviewCheckBox>
        {reviewCnt > 0 ? (
          <S.ReviewImgContainer>
            <ReviewImages
              reviewCnt={reviewCnt}
              reviewImg={reviewImg}
              onPhotoReviewsClick={onPhotoReviewsClick}
            />
          </S.ReviewImgContainer>
        ) : (
          <S.GrayText>아직 리뷰가 없습니다.</S.GrayText>
        )}
      </S.ReviewHeader>

      {reviewData?.map((data: IReviewDetailData) => (
        <S.ReviewPageWrapper
          key={data.reviewId}
          onClick={(event) =>
            handleNavigation(event, data.productId, data.reviewId)
          }
        >
          <ReviewPage reviewData={data} onEditClick={onEditClick} />
        </S.ReviewPageWrapper>
      ))}
    </S.ReviewContainer>
  )
}

export default Review
