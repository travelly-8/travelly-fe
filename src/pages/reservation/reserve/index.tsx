import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import ReviewProductCard from '@/pages/review/components/review-product-card'

import PageHeader from '@components/page-header'

import * as S from './ReservationPage.style'

function ReservationPage() {
  return (
    <>
      <PageHeader>
        <S.HeaderTitle>상품 예약하기</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        <S.CardWrapper>
          <ReviewProductCard />
        </S.CardWrapper>
        <S.CheckBoxWrapper>
          <S.InputCheckBox
            type="checkbox"
            id="get-account"
            name="get-account"
          />
          <S.GetAccount>계정정보 가져오기</S.GetAccount>
        </S.CheckBoxWrapper>
        <TicketCountSection />
      </S.PageContainer>
    </>
  )
}

export default ReservationPage
