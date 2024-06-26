import { getMemberProfile } from '@/api/myAPI.ts'
import { cancelReservation } from '@/api/reservation.ts'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile.ts'
import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'
import { makeKorLocale } from '@/utils/makeKORLocale.ts'

import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import * as S from '../PaySheet.styles.tsx'

const PayCancelSheet = ({ productPoint = 0 }: IPaySheet) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { reservationId } = useParams()
  const handleConfirm = async () => {
    try {
      await cancelReservation(Number(reservationId))
      alert('결제가 취소되었습니다.')
      dispatch(sheet({ name: 'pay-cancel-sheet', status: false, text: '' }))
      navigate('/reservation-list')
    } catch (error) {
      alert('결제 취소에 실패했습니다.')
    }
  }
  const { data } = useGetMemberProfile('getMemberProfile', getMemberProfile)
  return (
    <GrabSheet name="pay-cancel" align="left">
      <S.Title>결제 취소하시겠습니까?</S.Title>
      <S.SheetItem $underline={false}>
        <S.ItemKey>현재 포인트</S.ItemKey>
        <S.ItemValue $primary={false}>
          {makeKorLocale(data?.point ?? 0)}P
        </S.ItemValue>
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
          {data && makeKorLocale(data.point + productPoint)}P
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
