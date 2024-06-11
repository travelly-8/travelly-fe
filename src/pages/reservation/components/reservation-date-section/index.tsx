import * as S from './ReservationDateSection.style'

interface IReservationDateSectionProps {
  onCalendarClick: () => void
}

function ReservationDateSection({
  onCalendarClick,
}: IReservationDateSectionProps) {
  return (
    <S.SectionWrapper onClick={onCalendarClick}>
      <S.Title>예약 날짜</S.Title>
      <S.Date>24.00.00~24.00.00</S.Date>
    </S.SectionWrapper>
  )
}

export default ReservationDateSection
