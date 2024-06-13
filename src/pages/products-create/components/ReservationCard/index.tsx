import ReservationCardButtonContainer from '../ReservationCardButtonContainer'
import ReservationCardInfo from '../ReservationCardInfo'
import * as S from './ReservationCard.style'
import { reservationData } from './mockData'

const ReservationCard = () => {
  return (
    <S.CardWrapper>
      <S.InfoWrapper>
        <ReservationCardInfo reservation={reservationData} />
        <ReservationCardButtonContainer />
      </S.InfoWrapper>
    </S.CardWrapper>
  )
}

export default ReservationCard
