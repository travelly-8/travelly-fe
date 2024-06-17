import { IReservationCardProps } from '../ReservationCard/ReservationCard.type'
import * as S from './ReservationCardInfo.style'

const ReservationCardInfo: React.FC<{
  reservation: IReservationCardProps
}> = ({ reservation }) => {
  const { name, date, email, phoneNumber } = reservation
  return (
    <S.Wrapper>
      <S.InfoName>
        <S.InfoLabel>예약자:</S.InfoLabel>
        <S.InfoValue>{name}</S.InfoValue>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoName>
      <S.InfoDetail>
        <S.InfoItem>
          <S.InfoLabel>이메일:</S.InfoLabel>
          <S.InfoValue>{email}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>연락처:</S.InfoLabel>
          <S.InfoValue>{phoneNumber}</S.InfoValue>
        </S.InfoItem>
      </S.InfoDetail>
    </S.Wrapper>
  )
}

export default ReservationCardInfo
