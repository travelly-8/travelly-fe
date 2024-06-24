import { acceptReservation } from '@/api/reservation'
import RectangleButton from '@components/rectangle-button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './ManageCardButtonContainer.style'
import { IManageCardButtonContainerProps } from './ManageCardButtonContainer.type'

const ManageCardButtonContainer: React.FC<IManageCardButtonContainerProps> = ({
  productId,
  reservationId,
}) => {
  const navigate = useNavigate()

  const handleRejectClick = () => {
    navigate(`/rejection-reason/${productId}`)
  }

  const handleAcceptClick = async () => {
    try {
      await acceptReservation(reservationId)
      alert('예약이 수락되었습니다.')
    } catch (error) {
      alert('예약 수락 중 오류가 발생했습니다.')
    }
  }

  return (
    <S.ButtonWrapper>
      <RectangleButton
        size={'small'}
        color={'disabled'}
        onClick={handleRejectClick}
      >
        거절하기
      </RectangleButton>
      <RectangleButton size={'small'} onClick={handleAcceptClick}>
        수락하기
      </RectangleButton>
    </S.ButtonWrapper>
  )
}

export default ManageCardButtonContainer
