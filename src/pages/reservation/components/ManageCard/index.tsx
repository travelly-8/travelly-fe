import React from 'react'
import ManageCardButtonContainer from '../ManageCardButtonContainer'
import ManageCardInfo from '../ManageCardInfo'
import * as S from './ManageCard.style'
import { IManageCardProps } from './ManageCard.type'

const ManageCard: React.FC<IManageCardProps> = ({ reservation }) => {
  return (
    <S.CardWrapper>
      <S.InfoWrapper>
        <ManageCardInfo reservation={reservation} />
        {reservation.productId !== undefined &&
          reservation.id !== undefined && (
            <ManageCardButtonContainer
              productId={reservation.productId}
              reservationId={reservation.id}
            />
          )}
      </S.InfoWrapper>
    </S.CardWrapper>
  )
}

export default ManageCard
