import * as S from './ProductCards.style'
import { IProductCardsData, IProductCardsProps } from './ProductCards.type'

function ProductCards({ cardData, size }: IProductCardsProps) {
  const {
    image,
    name,
    city,
    district,
    discount,
    price,
    reviewPoint,
    reviewCount,
  }: IProductCardsData = cardData

  return (
    <S.Container>
      <S.CardImage src={image} alt={name} size={size} />
      <S.ContentsWrapper>
        <S.Title>{name}</S.Title>
        <S.Location size={size}>
          <S.City>{city}</S.City>·<S.District>{district}</S.District>
        </S.Location>
        <S.DiscountPrice size={size}>
          <S.Discount>{discount}%</S.Discount>
          <S.Price>{price}원</S.Price>
        </S.DiscountPrice>
        <S.Review size={size}>
          <S.Star src="src/assets/browsing/empty-star.svg" />
          <S.ReviewPoint>{reviewPoint}</S.ReviewPoint>
          <S.ReviewCount>({reviewCount})</S.ReviewCount>
        </S.Review>
      </S.ContentsWrapper>
    </S.Container>
  )
}

export default ProductCards
