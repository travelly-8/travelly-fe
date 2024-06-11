import { useState } from 'react'

import ReservationDateSection from '@/pages/reservation/components/reservation-date-section'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import ReviewProductCard from '@/pages/review/components/review-product-card'

import PageHeader from '@components/page-header'

import * as S from './ReservationPage.style'

function ReservationPage() {
  const [isRadioChecked, setIsRadioChecked] = useState(true)

  const handleRadioChange = () => {
    setIsRadioChecked(!isRadioChecked)
  }

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
        <S.TicketInfo>
          <TicketCountSection />
          <ReservationDateSection />
        </S.TicketInfo>
        <S.PayOptions>
          <S.PayOptionHeader>결제 방법</S.PayOptionHeader>
          <S.PayOption>
            <S.Label>
              <S.Radio
                name="point"
                checked={isRadioChecked}
                onChange={handleRadioChange}
              />
              포인트 결제
            </S.Label>
            <S.PointInput
              type="text"
              visible={isRadioChecked}
              placeholder="프로모션 코드 입력"
            />
          </S.PayOption>
        </S.PayOptions>
      </S.PageContainer>
    </>
  )
}

export default ReservationPage
