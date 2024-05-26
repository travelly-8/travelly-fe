import { useState } from 'react'

import BookmarkButton from '@components/bookmark-button'

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
  const [isBookmarked, setIsBookmarked] = useState(false)
  //TODO: 클릭했을 시 찜 목록에 나타나도록 기능 추가 필요
  //TODO: 유저 아이디를 판별해서, 아이디를 가진 사람이 클릭한 적이 있다면 클릭한 state 그대로 가지고 있도록 기능 추가 필요

  return (
    <S.Container size={size}>
      <S.CardImage src={image} alt={name} size={size} />
      <BookmarkButton
        onClick={() => setIsBookmarked(!isBookmarked)}
        isBookmarked={isBookmarked}
      />
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
