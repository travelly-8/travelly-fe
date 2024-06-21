import { getMemberProfile } from '@/api/myAPI.ts'
import { postReservation } from '@/api/reservation.ts'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile.ts'
import type { IReservationData } from '@/pages/reservation/components/sheet/pay-confirm-sheet/PayConfirmSheet.type.ts'
import type { IReservationSliceState } from '@/store/reservation-slice/reservation-slice.type.ts'

import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../PaySheet.styles.tsx'

const PayConfirmSheet = () => {
  const navigate = useNavigate()
  const reservationInfo = useSelector(
    (state: IReservationSliceState) => state.reservation.value,
  )
  const { data } = useGetMemberProfile('getMemberProfile', getMemberProfile)
  const { productId, ticketPrice, ...rest } = reservationInfo
  const handleReservationClick = async () => {
    try {
      await postReservation(reservationInfo.productId, rest as IReservationData)
      alert('예약이 완료되었습니다.')
      navigate('/reseravtion-list')
    } catch (error) {
      alert('예약에 실패했습니다.')
    }
  }

  return (
    <GrabSheet name="pay-confirm-sheet" align="left">
      <S.Title>결제하시겠습니까?</S.Title>
      <S.SheetItem $underline={false}>
        <S.ItemKey>현재 포인트</S.ItemKey>
        <S.ItemValue $primary={false}>{data?.point}P</S.ItemValue>
      </S.SheetItem>
      <S.SheetItem $underline={true}>
        <S.ItemKey>- 결제 포인트</S.ItemKey>
        <S.ItemValue $primary={true}>
          {reservationInfo.ticketPrice}P
        </S.ItemValue>
      </S.SheetItem>
      <S.SheetItem $underline={true}>
        <S.ItemKey>잔여 포인트</S.ItemKey>
        <S.ItemValue $primary={true}>
          {data && data.point - reservationInfo.ticketPrice}P
        </S.ItemValue>
      </S.SheetItem>
      <S.ButtonWrapper>
        <RoundButton.Primary onClick={handleReservationClick}>
          결제하기
        </RoundButton.Primary>
      </S.ButtonWrapper>
    </GrabSheet>
  )
}

export default PayConfirmSheet
