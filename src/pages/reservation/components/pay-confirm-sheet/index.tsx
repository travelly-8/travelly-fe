import type { IPayConfirmSheet } from '@/pages/reservation/components/pay-confirm-sheet/PayConfirmSheet.type.ts'
import { makeKorLocale } from '@/utils/makeKORLocale.ts'

import GrabSheet from '@components/grab-sheet'

import * as S from './PayConfirmSheet.styles.tsx'

const PayConfirmSheet = ({ userPoint, productPoint }: IPayConfirmSheet) => {
  return (
    <div>
      <GrabSheet name="pay-confirm" align="left">
        <S.Title>결제하시겠습니까?</S.Title>
        <S.SheetItem $underline={false}>
          <S.ItemKey>현재 포인트</S.ItemKey>
          <S.ItemValue $primary={false}>
            {makeKorLocale(userPoint)}P
          </S.ItemValue>
        </S.SheetItem>
        <S.SheetItem $underline={true}>
          <S.ItemKey>- 결제 포인트</S.ItemKey>
          <S.ItemValue $primary={true}>
            {makeKorLocale(productPoint)}P
          </S.ItemValue>
        </S.SheetItem>
        <S.SheetItem $underline={false}>
          <S.ItemKey>남은 포인트</S.ItemKey>
          <S.ItemValue $primary={true}>
            {makeKorLocale(userPoint - productPoint)}P
          </S.ItemValue>
        </S.SheetItem>
      </GrabSheet>
    </div>
  )
}

export default PayConfirmSheet
