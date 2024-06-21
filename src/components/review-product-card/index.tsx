import ArrowRight from '@/assets/common/arrow-right.svg'

import { matchPath, useLocation, useNavigate } from 'react-router-dom'

import * as S from './ReviewProductCard.style'
import { IReviewProductCardProps } from './ReviewProductCard.type'

const ReviewProductCard: React.FC<IReviewProductCardProps> = ({
  productDetail,
  isCommentMode,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  if (!productDetail) return null

  const { productId, productName, name, createdDate, images, reviewerName } =
    productDetail
  const imageUrl = images?.[0]?.url || '이미지 없음'

  const handleArrowClick = () => {
    navigate(`/products/${productId}`)
  }
  const isReservation =
    matchPath('/reservation/:productId', location.pathname) !== null
  const reviewDate = isReservation
    ? createdDate
    : new Date(createdDate).toLocaleDateString()

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={imageUrl} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{productName || name}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>작성자 : {reviewerName}</S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>작성일 : {reviewDate}</S.Date>
          </S.PriceAndDateWrapper>
        </S.DetailWrapper>
      </S.ContentWrapper>
      {isCommentMode ? (
        <S.CommentCount>1</S.CommentCount>
      ) : (
        <S.Arrow
          src={ArrowRight}
          alt="상세 페이지"
          onClick={handleArrowClick}
        />
      )}
    </S.Wrapper>
  )
}

export default ReviewProductCard
