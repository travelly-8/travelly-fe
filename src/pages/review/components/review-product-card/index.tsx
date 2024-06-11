import ArrowRight from '@/assets/common/arrow-right.svg'
import * as S from './ReviewProductCard.style'
import { IReviewProductCardProps } from './ReviewProductCard.type'

const ReviewProductCard: React.FC<IReviewProductCardProps> = ({
  productDetail,
  isCommentMode,
}) => {
  const { name, price, sellingDate, imageUrl } = productDetail || {}

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={imageUrl} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{name}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>{price}원</S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>{sellingDate}</S.Date>
          </S.PriceAndDateWrapper>
        </S.DetailWrapper>
      </S.ContentWrapper>
      {isCommentMode ? (
        <S.CommentCount>1</S.CommentCount>
      ) : (
        <S.Arrow src={ArrowRight} alt="상세 페이지" />
      )}
    </S.Wrapper>
  )
}

export default ReviewProductCard
