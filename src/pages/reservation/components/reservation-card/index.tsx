import { formatWithCommas } from '@/utils/formatWIthCommas'

import { useNavigate } from 'react-router-dom'

import * as S from './ReservationCard.style'

export interface IReservationCard {
  productName: string
  price: number
  date: string
  pendingReservationCount?: number
  productImages: IImage[]
  productId: number
}

const ReservationCard = ({ data }: { data: IReservationCard }) => {
  const navigate = useNavigate()
  const {
    productName,
    price,
    date,
    pendingReservationCount,
    productImages,
    productId,
  } = data

  if (data) {
    return (
      <S.Wrapper onClick={() => navigate(`/manage-reservations/${productId}`)}>
        <S.LeftWrapper>
          <img src={productImages[0].url || ''} />
          <S.NameAndPriceDate>
            <h1>{productName}</h1>
            <S.PriceAndDate>
              <h2>
                {formatWithCommas(price)}원 <span>| {date}</span>
              </h2>
            </S.PriceAndDate>
          </S.NameAndPriceDate>
        </S.LeftWrapper>
        <S.Badge>
          <p>{pendingReservationCount}</p>
        </S.Badge>
      </S.Wrapper>
    )
  }
}

export default ReservationCard
