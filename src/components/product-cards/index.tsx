import * as S from './ProductCards.style'

function ProductCards() {
  return (
    <S.Container>
      <S.CardImage src="src/assets/browsing/mock/mock1.png" />
      <S.ContentsWrapper>
        <S.Title>상품명</S.Title>
        <S.Location>
          <S.City>서울시</S.City>·<S.District>강남구</S.District>
        </S.Location>
        <S.DiscountPrice>
          <S.Discount>10%</S.Discount>
          <S.Price>1000000원</S.Price>
        </S.DiscountPrice>
        <S.Review>
          <S.Star src="src/assets/browsing/empty-star.svg" />
          <S.ReviewPoint>4.0</S.ReviewPoint>
          <S.ReviewCount>(000)</S.ReviewCount>
        </S.Review>
      </S.ContentsWrapper>
    </S.Container>
  )
}

export default ProductCards
