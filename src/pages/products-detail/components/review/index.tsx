import edit from '@/assets/products-detail/edit.svg'
import sort from '@/assets/products-detail/sort.svg'

import { useNavigate } from 'react-router-dom'
import * as S from './Review.style'
import ReviewPage from './ReviewPage'

import type { IReviewData, IReviewProps } from './Review.type'

const Review: React.FC<IReviewProps> = ({
  reviewCnt,
  reviewImg,
  reviewData,
  onOrderClick,
  onEditClick,
  onPhotoReviewsClick,
}) => {
  const reviewImgCnt = reviewImg?.length
  const navigate = useNavigate()

  const handleHeaderClick = () => {
    navigate('/review/list')
  }

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    navigate('/review/write')
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
              <S.InputCheckBox type="checkbox" id="recent" name="recent" />
              <S.BlackText>최근 방문</S.BlackText>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <S.InputCheckBox type="checkbox" id="pic/vid" name="pic/vid" />
              <S.BlackText>사진/동영상</S.BlackText>
            </S.CheckBoxWrapper>
          </S.CheckBox>
          <S.SortWrapper onClick={onOrderClick}>
            <S.GrayText>정렬</S.GrayText>
            <S.IconSort src={sort} alt="정렬" />
          </S.SortWrapper>
        </S.ReviewCheckBox>
        {reviewImgCnt && (
          <S.ReviewImgContainer>
            {reviewImgCnt <= 3 ? (
              reviewImg.map((photo) => (
                <S.ReviewImg key={photo} src={photo} alt="리뷰 이미지" />
              ))
            ) : (
              <>
                <S.ReviewImg src={reviewImg[0]} alt="리뷰 이미지" />
                <S.ReviewImg src={reviewImg[1]} alt="리뷰 이미지" />
                <S.LastReviewImg onClick={onPhotoReviewsClick}>
                  <S.ReviewImg src={reviewImg[2]} alt="리뷰 이미지" />
                  <S.ReviewImgBackground>
                    +{reviewImgCnt - 2}
                  </S.ReviewImgBackground>
                </S.LastReviewImg>
              </>
            )}
          </S.ReviewImgContainer>
        )}
      </S.ReviewHeader>
      {reviewData.map((data: IReviewData) => (
        <ReviewPage
          key={data.name}
          reviewData={data}
          onEditClick={onEditClick}
        />
      ))}
    </S.ReviewContainer>
  )
}

export default Review
