import { useCallback } from 'react'

import SheetRenderer from '@/pages/products-detail/components/sheet-renderer'
import { ISheetComponents } from '@/pages/products-detail/ProductsDetail.type.ts'
import CancellationPolicy from '@/pages/reservation/components/cancellation-policy'
import ReservationInput from '@/pages/reservation/components/reservation-input'
import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'

import FooterReservation from '@components/footer-reservation'
import PageHeader from '@components/page-header'
import { useDispatch } from 'react-redux'

import * as S from './ReservedDetailPage.syles.tsx'
import { ProductCard, ProductImage } from './ReservedDetailPage.syles.tsx'

function ReservedDetailPage() {
  const dispatch = useDispatch()

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

  const payCancelProps: IPaySheet = {
    userPoint: 1000,
    productPoint: 1000,
  }
  return (
    <div>
      <PageHeader>
        <S.HeaderTitle>상품 예약 상세</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        <ProductCard>
          <ProductImage src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" />
          <S.ProductText>
            <S.ProductName>상품명</S.ProductName>
            <div>
              <S.ProductPrice>000,000원</S.ProductPrice>
              <S.ProductDate> | 24.00.00~24.00.00</S.ProductDate>
            </div>
          </S.ProductText>
        </ProductCard>
        <S.Section>
          <ReservationInput disabled={true} />
          <TicketCountSection isInput={false} />
          <S.SheetItem $underline={false}>
            <S.ItemKey>예약 날짜</S.ItemKey>
            <S.ItemValue $primary={false}>24.00.00</S.ItemValue>
          </S.SheetItem>
        </S.Section>
        <S.Section>
          <S.SheetItem $underline={false}>
            <S.ItemKey>결제 방법</S.ItemKey>
            <S.ItemValue $primary={false}>포인트 결제</S.ItemValue>
          </S.SheetItem>
          <S.SheetItem $underline={false}>
            <S.ItemKey>총 결제 금액</S.ItemKey>
            <S.ItemValue $primary={true}>10,000</S.ItemValue>
          </S.SheetItem>
        </S.Section>
        <CancellationPolicy />
      </S.PageContainer>
      <FooterReservation
        isBookmarked={true}
        isReservationProduct={true}
        price={0}
        discount={0}
        buttontype="cancelPayment"
        onPayCancelClick={() => handleSheetDispatch('pay-cancel-sheet')}
      />
      <SheetRenderer payCancelProps={payCancelProps} />
    </div>
  )
}

export default ReservedDetailPage
