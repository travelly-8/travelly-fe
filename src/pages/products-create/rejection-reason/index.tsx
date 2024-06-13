import PageHeader from '@components/page-header'
import { reservationData } from '../components/ReservationCard/mockData'
import ReservationCardInfo from '../components/ReservationCardInfo'
import * as S from './RejectionReason.style'

const RejectionReason = () => {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Title>예약 거절 사유 입력</S.Title>
      </PageHeader>
      <S.InfoWrapper>
        <ReservationCardInfo reservation={reservationData} />
      </S.InfoWrapper>
      <S.InputContainer>
        <S.Text>예약 거절 사유 입력</S.Text>
        <S.Textarea placeholder="설명 입력하기"></S.Textarea>
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default RejectionReason
