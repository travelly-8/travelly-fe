import { Fragment, useState } from 'react'

import star from '@/assets/home/empty-star.svg'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import { registerRecentProducts } from '@/utils/registerLocalStorage'

import BookmarkButton from '@components/bookmark-button'
import { useNavigate } from 'react-router-dom'

import * as S from './ProductCard.style'
import { IProductCardData, IProductCardProps } from './ProductCard.type'

function ProductCard({ cardData, size }: IProductCardProps) {
  const {
    id,
    imageUrl,
    name,
    cityCode,
    address,
    discount = 10,
    ticketDto,
    rating,
    reviewCount,
  }: IProductCardData = cardData
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation()
    navigate(`/products/${cardData.id}`)
    registerRecentProducts(cardData)
  }

  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmarkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  const city = LOCALE_CODE_LIST[cityCode]
  const district = address?.split(' ')[1]
  const price = ticketDto[0]?.price
  const formattedPrice = price.toLocaleString()

  return (
    <S.Container size={size} onClick={(e) => handleClick(e)}>
      <S.CardImage src={imageUrl} alt={name} size={size} />
      <BookmarkButton
        onClick={handleBookmarkClick}
        isBookmarked={isBookmarked}
      />
      <S.ContentsWrapper>
        <S.Title>{name}</S.Title>
        <S.Location size={size}>
          <S.City>{city}</S.City>·<S.District>{district}</S.District>
        </S.Location>
        {size !== 'summary' && (
          <Fragment>
            <S.DiscountPrice size={size}>
              <S.Discount>{discount}%</S.Discount>
              <S.Price>{formattedPrice}원</S.Price>
            </S.DiscountPrice>
            <S.Review size={size}>
              <S.Star src={star} />
              <S.ReviewPoint>{rating}</S.ReviewPoint>
              <S.ReviewCount>({reviewCount})</S.ReviewCount>
            </S.Review>
          </Fragment>
        )}
      </S.ContentsWrapper>
    </S.Container>
  )
}

export default ProductCard
