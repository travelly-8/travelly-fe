import { useState } from 'react'

import edit from '@/assets/products-detail/edit.svg'
import sort from '@/assets/products-detail/sort.svg'
import { RootState } from '@/store/store'

import CheckBox from '@components/check-box'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './Review.style'

import type { IReviewProps } from './Review.type'

const Review: React.FC<IReviewProps> = ({
  reviewCnt,
  reviewImg,
  reviewData,
  onOrderClick,
  onEditClick,
  onPhotoReviewsClick,
}) => {
  const [isRecentVisitChecked, setIsRecentVisitChecked] = useState(false)
  const [isPictureChecked, setIsPictureChecked] = useState(false)

  const handleSetGetAccountChecked = (isChecked: boolean) => {
    setIsRecentVisitChecked(isChecked)
  }

  const productDetail = useSelector((state: RootState) => state.product.detail)

  const reviewImgCnt = reviewImg?.length || 0
  const navigate = useNavigate()

  const handleHeaderClick = () => {
    navigate('/review/list')
  }

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    navigate('/review/write', { state: { productDetail } })
  }

  return (
    <S.ReviewContainer>
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
        {reviewImgCnt > 0 ? (
          <S.ReviewImgContainer>
            {reviewImgCnt <= 3 ? (
              reviewImg?.map((photo) => (
                <S.ReviewImg key={photo} src={photo} alt="리뷰 이미지" />
              ))
            ) : (
              <>
                <S.ReviewImg src={reviewImg?.[0]} alt="리뷰 이미지" />
                <S.ReviewImg src={reviewImg?.[1]} alt="리뷰 이미지" />
                <S.LastReviewImg onClick={onPhotoReviewsClick}>
                  <S.ReviewImg src={reviewImg?.[2]} alt="리뷰 이미지" />
                  <S.ReviewImgBackground>
                    +{reviewImgCnt - 2}
                  </S.ReviewImgBackground>
                </S.LastReviewImg>
              </>
            )}
          </S.ReviewImgContainer>
        ) : (
          <S.GrayText>아직 리뷰가 없습니다.</S.GrayText>
        )}
      </S.ReviewHeader>

      {/* {reviewData.map((data: IReviewDetailData) => (
        <Link
          key={data.reviewId}
          to={`/review/${data.productId}/${data.reviewId}`}
        >
          <ReviewPage reviewData={data} onEditClick={onEditClick} />
        </Link>
      ))} */}
    </S.ReviewContainer>
  )
}

export default Review
