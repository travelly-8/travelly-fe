import React from 'react'
import { IReservationCardProps } from '../ManageCard/ManageCard.type'
import * as S from './ManageCardInfo.style'

const ManageCardInfo: React.FC<{ reservation: IReservationCardProps }> = ({
  reservation,
}) => {
  const { buyerName, date, email, phone } = reservation
  return (
    <S.Wrapper>
      <S.InfoName>
        <S.InfoLabel>예약자:</S.InfoLabel>
        <S.InfoNameValue>{buyerName}</S.InfoNameValue>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoName>
      <S.InfoDetail>
        <S.InfoItem>
          <S.InfoLabel>이메일:</S.InfoLabel>
          <S.InfoValue>{email}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>연락처:</S.InfoLabel>
          <S.InfoValue>{phone}</S.InfoValue>
        </S.InfoItem>
      </S.InfoDetail>
    </S.Wrapper>
  )
}

export default ManageCardInfo
