import { IReservationManageResponse } from '@/hooks/api/reserveAPI/reservation.type'
import { formatWithCommas } from '@/utils/formatWIthCommas'

import * as S from './ReservationCard.style'

const ReservationCard = ({ data }: { data: IReservationManageResponse }) => {
  const {
    productName,
    price,
    date,
    reservationCount,
    pendingReservationCount,
    productImages,
  } = data

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <img src={productImages[0].url} />
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

export default ReservationCard
