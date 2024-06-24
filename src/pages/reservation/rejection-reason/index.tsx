import {
  getMyReservationManageDetail,
  rejectReservation,
} from '@/api/reservation'
import useGetManageDetail from '@/hooks/api/reserveAPI/useGetManageDetail'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ManageCardInfo from '../../reservation/components/ManageCardInfo'
import * as S from './RejectionReason.style'

const RejectionReason = () => {
  const { reservationId = 0 } = useParams<{ reservationId: string }>()
  const [reason, setReason] = useState('')
  const [buttonColor, setButtonColor] = useState<'primary' | 'disabled'>(
    'disabled',
  )
  const navigate = useNavigate()

  const { returnData } = useGetManageDetail(
    ['reservation-manage-detail', String(reservationId)],
    () => getMyReservationManageDetail(+reservationId),
  )

  useEffect(() => {
    if (reason.length >= 20) {
      setButtonColor('primary')
    } else {
      setButtonColor('disabled')
    }
  }, [reason])

  const handleRejectSubmit = async () => {
    try {
      await rejectReservation(+reservationId, reason)
      alert('거절 사유가 등록되었습니다.')
      navigate(`/manage-reservations/${returnData?.productId}`)
    } catch (error) {
      alert('거절 사유 등록 중 오류가 발생했습니다.')
    }
  }

  if (returnData) {
    const reservation = {
      buyerName: returnData.reservations[0]?.buyerName,
      date: returnData.operationDays[0]?.date,
      email: returnData.reservations[0]?.email,
      phone: returnData.reservations[0]?.phone,
    }

    return (
      <S.Wrapper>
        <PageHeader>
          <S.Title>예약 거절 사유 입력</S.Title>
        </PageHeader>
        <S.InfoWrapper>
          <ManageCardInfo reservation={reservation} />
        </S.InfoWrapper>
        <S.InputContainer>
          <S.Text>예약 거절 사유 입력</S.Text>
          <S.Textarea
            placeholder="설명 입력하기"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </S.InputContainer>
        <S.ButtonWrapper>
          <RectangleButton
            size="large"
            color={buttonColor}
            onClick={handleRejectSubmit}
            disabled={buttonColor === 'disabled'}
          >
            사유 등록
          </RectangleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    )
  }
}

export default RejectionReason
