import ArrowRight from '@/assets/common/arrow-right.svg'
import { useNavigate } from 'react-router-dom'
import * as S from './ReviewProductCard.style'
import { IReviewProductCardProps } from './ReviewProductCard.type'

const ReviewProductCard: React.FC<IReviewProductCardProps> = ({
  productDetail,
  isCommentMode,
}) => {
  const navigate = useNavigate()

  if (!productDetail) return null

  const { id, name, ticketDto, createdDate, images } = productDetail
  const price = ticketDto?.[0]?.price || '가격 정보 없음'
  const imageUrl = images?.[0]?.url || '이미지 없음'

  const handleArrowClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={imageUrl} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{name}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>{price}원</S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>{new Date(createdDate).toLocaleDateString()}</S.Date>
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
