import { useCallback, useState } from 'react'

import { getReservationDetail } from '@/api/reservation.ts'
import useGetReservationDetail from '@/hooks/api/reserveAPI/useGetReservationDetail.ts'
import SheetRenderer from '@/pages/products-detail/components/sheet-renderer'
import type { ISheetComponents } from '@/pages/products-detail/ProductsDetail.type.ts'
import CancellationPolicy from '@/pages/reservation/components/cancellation-policy'
import ReservationInput from '@/pages/reservation/components/reservation-input'
import type { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import type { IReservedTickets } from '@/pages/reservation/components/ticket-count-section/TicketCountSection.type.ts'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'
import { makeKorLocale } from '@/utils/makeKORLocale.ts'

import FooterReservation from '@components/footer-reservation'
import PageHeader from '@components/page-header'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as S from './ReservedDetailPage.styles.tsx'

import ReviewListCard from '@components/review-list-card/index.tsx'

function ReservedDetailPage() {
  const dispatch = useDispatch()
  const { reservationId } = useParams()
  const [isCancelPolicyChecked, setIsCancelPolicyChecked] = useState(false)

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

  const handleSetCancellationPolicyChecked = (isChecked: boolean) => {
    setIsCancelPolicyChecked(isChecked)
  }

  const handlePayConfirmClick = () => {
    if (isCancelPolicyChecked) {
      handleSheetDispatch('pay-cancel-sheet')
    } else {
      dispatch(sheet({ name: 'pay-cancel-sheet', status: false, text: '' }))
      alert('취소 정책에 동의해주세요.')
    }
  }

  const { returnData: reservationData } = useGetReservationDetail(
    `reservation-detail:${reservationId}`,
    () => getReservationDetail(Number(reservationId)),
  )

  const defaultValues = {
    name: reservationData?.buyerName || '',
    phone: reservationData?.phone || '',
    email: reservationData?.email || '',
  }
  const payCancelProps: IPaySheet = {
    productPoint: reservationData?.totalPrice,
  }

  const reservedTickets: IReservedTickets[] | undefined =
    reservationData?.tickets

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>상품 예약 상세</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        <ReviewListCard
          key={reservationData?.id}
          id={reservationData?.id}
          productName={reservationData?.productName}
          productId={reservationData?.productId}
          productImages={reservationData?.productImages ?? []}
          buyerName={reservationData?.buyerName}
          date={reservationData?.date}
          totalPrice={reservationData?.totalPrice}
        />
        <S.Section>
          <ReservationInput disabled={true} defaultValues={defaultValues} />
          <TicketCountSection
            isInput={false}
            reservedTickets={reservedTickets}
          />
          <S.SheetItem $underline={false}>
            <S.ItemKey>예약 날짜</S.ItemKey>
            <S.ItemValue $primary={false}>{reservationData?.date}</S.ItemValue>
          </S.SheetItem>
        </S.Section>
        <S.Section>
          <S.SheetItem $underline={false}>
            <S.ItemKey>결제 방법</S.ItemKey>
            <S.ItemValue $primary={false}>포인트 결제</S.ItemValue>
          </S.SheetItem>
          <S.SheetItem $underline={false}>
            <S.ItemKey>총 결제 금액</S.ItemKey>
            <S.ItemValue $primary={true}>
              {makeKorLocale(reservationData?.totalPrice ?? 0)}
            </S.ItemValue>
          </S.SheetItem>
        </S.Section>
        <CancellationPolicy
          setCancellationPolicyChecked={handleSetCancellationPolicyChecked}
        />
      </S.PageContainer>
      <FooterReservation
        isBookmarked={true}
        isReservationProduct={true}
        price={0}
        buttontype="cancelPayment"
        onPayCancelClick={handlePayConfirmClick}
      />
      <SheetRenderer payCancelProps={payCancelProps} />
    </>
  )
}

export default ReservedDetailPage
