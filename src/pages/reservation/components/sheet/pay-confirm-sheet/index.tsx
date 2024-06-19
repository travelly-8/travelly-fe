import { getMemberProfile } from '@/api/myAPI.ts'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile.ts'
import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type.ts'
import { IReservationSliceState } from '@/store/reservation-slice/reservation-slice.type.ts'

import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useSelector } from 'react-redux'

import * as S from '../PaySheet.styles.tsx'

const PayConfirmSheet = ({ userPoint, productPoint }: IPaySheet) => {
  const reservationInfo = useSelector(
    (state: IReservationSliceState) => state.reservation.value,
  )
  const handleReservationClick = () => {
    console.log(reservationInfo) // 예약 보낼때 사용하는 정보 예약 api 호출 필요
  }

  const { data } = useGetMemberProfile('getMemberProfile', getMemberProfile)
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
