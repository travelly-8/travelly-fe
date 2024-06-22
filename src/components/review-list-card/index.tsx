import ArrowRight from '@/assets/common/arrow-right.svg'

import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './ReviewListCard.style'

const ReviewListCard: React.FC<IReviewListCardProps> = ({
  id,
  productName,
  productId,
  productImages,
  buyerName,
  date,
  totalPrice,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isCancelPage = location.pathname === `/reservation-detail/${id}`

  const handleArrowClick = () => {
    if (isCancelPage) {
      navigate(`/products/${productId}`)
    } else {
      navigate(`/reservation-detail/${id}`)
    }
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper onClick={handleArrowClick}>
        <S.Img src={productImages[0]?.url} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{`(예약자: ${buyerName}) ${productName}`}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>{totalPrice}원</S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>{date}</S.Date>
          </S.PriceAndDateWrapper>
        </S.DetailWrapper>
      </S.ContentWrapper>
      <S.Arrow src={ArrowRight} alt="상세 페이지" onClick={handleArrowClick} />
    </S.Wrapper>
  )
}

export default ReviewListCard
