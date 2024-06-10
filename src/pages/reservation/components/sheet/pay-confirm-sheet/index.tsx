import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import { makeKorLocale } from '@/utils/makeKORLocale.ts'

import GrabSheet from '@components/grab-sheet'

import RoundButton from '@components/round-button'
import * as S from '../PaySheet.styles.tsx'

const PayConfirmSheet = ({ userPoint, productPoint }: IPaySheet) => {
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
        <S.SheetItem $underline={true}>
          <S.ItemKey>잔여 포인트</S.ItemKey>
          <S.ItemValue $primary={true}>
            {makeKorLocale(userPoint - productPoint)}P
          </S.ItemValue>
        </S.SheetItem>
        <S.ButtonWrapper>
          <RoundButton.Primary>결제하기</RoundButton.Primary>
        </S.ButtonWrapper>
      </GrabSheet>
    </div>
  )
}

export default PayConfirmSheet
