import { IReservationCardProps } from '../ReservationCard/ReservationCard.type'
import * as S from './ReservationCardInfo.type'

const ReservationCardInfo: React.FC<{
  reservation: IReservationCardProps
}> = ({ reservation }) => {
  const { name, date, email, phoneNumber } = reservation
  return (
    <div>
      <S.InfoName>
        <div>
          <S.InfoLabel>예약자:</S.InfoLabel>
          <S.InfoLabel>{name}</S.InfoLabel>
        </div>
        <div>
          <S.InfoValue>{date}</S.InfoValue>
        </div>
      </S.InfoName>
      <S.InfoDetail>
        <div>
          <S.InfoLabel>이메일:</S.InfoLabel>
          <S.InfoValue>{email}</S.InfoValue>
        </div>
        <div>
          <S.InfoLabel>연락처:</S.InfoLabel>
          <S.InfoValue>{phoneNumber}</S.InfoValue>
        </div>
      </S.InfoDetail>
    </div>
  )
}

export default ReservationCardInfo
