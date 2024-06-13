import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'
import { makeKorLocale } from '@/utils/makeKORLocale.ts'

import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useDispatch } from 'react-redux'

import * as S from '../PaySheet.styles.tsx'

const PayCancelSheet = ({ userPoint, productPoint }: IPaySheet) => {
  const dispatch = useDispatch()
  const handleConfirm = () => {
    dispatch(sheet({ name: 'pay-cancel', status: false }))
  }

  return (
    <GrabSheet name="pay-cancel" align="left">
      <S.Title>결제 취소하시겠습니까?</S.Title>
      <S.SheetItem $underline={false}>
        <S.ItemKey>현재 포인트</S.ItemKey>
        <S.ItemValue $primary={false}>{makeKorLocale(userPoint)}P</S.ItemValue>
      </S.SheetItem>
      <S.SheetItem $underline={true}>
        <S.ItemKey>+ 취소 포인트</S.ItemKey>
        <S.ItemValue $primary={true}>
          {makeKorLocale(productPoint)}P
        </S.ItemValue>
      </S.SheetItem>
      <S.SheetItem $underline={true}>
        <S.ItemKey>전체 포인트</S.ItemKey>
        <S.ItemValue $primary={true}>
          {makeKorLocale(userPoint + productPoint)}P
        </S.ItemValue>
      </S.SheetItem>
      <S.ButtonWrapper>
        <RoundButton.Primary onClick={handleConfirm}>
          결제 취소
        </RoundButton.Primary>
      </S.ButtonWrapper>
    </GrabSheet>
  )
}

export default PayCancelSheet
