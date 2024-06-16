import { format } from 'date-fns'

import * as S from './ReservationDateSection.style'

interface IReservationDateSectionProps {
  onCalendarClick: () => void
  value: string
}

function ReservationDateSection({
  onCalendarClick,
  value,
}: IReservationDateSectionProps) {
  const dateValue = new Date(value)
  return (
    <S.SectionWrapper onClick={onCalendarClick}>
      <S.Title>예약 날짜</S.Title>
      <S.Date>{format(dateValue, 'yy.MM.dd')}</S.Date>
    </S.SectionWrapper>
  )
}

export default ReservationDateSection
