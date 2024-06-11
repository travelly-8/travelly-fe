import { useState } from 'react'

import ReviewProductCard from '@/components/review-product-card'
import CancellationPolicy from '@/pages/reservation/components/cancellation-policy'
import ReservationDateSection from '@/pages/reservation/components/reservation-date-section'
import ReservationInput from '@/pages/reservation/components/reservation-input'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'

import CheckBox from '@components/check-box'
import FooterReservation from '@components/footer-reservation'
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
          <CheckBox text="계정정보 가져오기" />
        </S.CheckBoxWrapper>
        <ReservationInput />
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
              data-visible={isRadioChecked}
              placeholder="프로모션 코드 입력"
            />
          </S.PayOption>
        </S.PayOptions>
        <S.PayAmount>
          <S.AllPayTitle>
            <S.AllPayText>총 결제 금액</S.AllPayText>
            <S.Vat>(VAT포함)</S.Vat>
          </S.AllPayTitle>
          <S.AllAmount>1,000,000원</S.AllAmount>
        </S.PayAmount>
        <CancellationPolicy />
      </S.PageContainer>
      <FooterReservation
        isBookmarked={true}
        isReservationProduct={true}
        price={0}
        discount={0}
        buttonType="payment"
      />
    </>
  )
}

export default ReservationPage
