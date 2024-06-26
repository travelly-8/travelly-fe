import { Fragment, useState } from 'react'

import defaultImage from '@/assets/login/airplane.png'
import star from '@/assets/products-detail/star.svg'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import { IProducts } from '@/types/getMemberData.type'
import { registerRecentProducts } from '@/utils/registerLocalStorage'

import BookmarkButton from '@components/bookmark-button'
import { useNavigate } from 'react-router-dom'

import * as S from './ProductCard.style'
import { IProductCardProps } from './ProductCard.type'

function ProductCard({ cardData, size, bookmark = true }: IProductCardProps) {
  const {
    id,
    images,
    name,
    cityCode,
    address,
    ticketDto,
    rating,
    reviewCount,
    detailAddress,
    price,
  }: IProducts = cardData
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation()
    navigate(`/products/${id}`)
    window.location.reload()
    registerRecentProducts(cardData)
  }

  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmarkClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  const city = cityCode ? LOCALE_CODE_LIST[cityCode] : address.split(' ')[0]
  const district = address?.split(' ')[1]
  const ticketPrice =
    ticketDto && ticketDto.length > 0 ? ticketDto[0].price : price
  const formattedPrice = ticketPrice?.toLocaleString()
  const formattedRating = +rating.toFixed(1)
  const image = images && images.length > 0 ? images[0].url : defaultImage

  return (
    <S.Container size={size} onClick={(e) => handleClick(e)}>
      <S.CardImage src={image} alt={name} size={size} />
      {bookmark && (
        <BookmarkButton
          onClick={handleBookmarkClick}
          isBookmarked={isBookmarked}
          position="absolute"
        />
      )}
      <S.ContentsWrapper>
        <S.Title>{name}</S.Title>
        <S.Location size={size}>
          <S.City>{city}</S.City>·<S.District>{district}</S.District>
        </S.Location>
        {size !== 'summary' && (
          <Fragment>
            <S.PriceWrapper size={size}>
              <S.Price>{formattedPrice}원~</S.Price>
            </S.PriceWrapper>
            <S.Review size={size}>
              <S.Star src={star} />
              <S.ReviewPoint>{formattedRating}</S.ReviewPoint>
              <S.ReviewCount>({reviewCount})</S.ReviewCount>
            </S.Review>
          </Fragment>
        )}
      </S.ContentsWrapper>
    </S.Container>
  )
}

export default ProductCard
