import { useEffect, useState } from 'react'

import BackBar from '@/components/back-bar'
import IconButton from '@/components/icon-button'
import { ModalSliceState, modal } from '@/store/modal'

import { useDispatch, useSelector } from 'react-redux'

import Bubble from '../components/bubble'
// eslint-disable-next-line import/order
import * as S from './SelectPlanPage.style'
// eslint-disable-next-line import/order
import type { ButtonType } from '@components/icon-button/IconButton.type'
// eslint-disable-next-line import/order
import ConfirmPage from '../components/confirm-page'

export default function SelectPlanPage() {
  const dispatch = useDispatch()
  const modalReducer = useSelector(
    (state: ModalSliceState) => state.modal.value,
  )
  const [TravellerStatus, setTravellerStatus] = useState<ButtonType>('default')
  const [TravelleeStatus, setTravelleeStatus] = useState<ButtonType>('default')

  useEffect(() => {
    dispatch(modal({ name: 'select-plan-confirm', status: false, text: '' }))
  }, [])

  const openModal = (text: string) => {
    dispatch(modal({ name: 'select-plan-confirm', status: true, text: text }))
    return
  }

  const handleButtonClick = (userType: 'traveller' | 'travellee') => {
    if (userType === 'traveller') {
      if (TravellerStatus === 'selected') openModal('트래블러(구매자)')
      setTravellerStatus('selected')
      setTravelleeStatus('unselected')
    } else {
      if (TravelleeStatus === 'selected') openModal('트래블리(판매자)')
      setTravellerStatus('unselected')
      setTravelleeStatus('selected')
    }
  }

  if (modalReducer.status) {
    return <ConfirmPage />
  } else {
    return (
      <S.Wrapper>
        <BackBar />
        <S.Title>회원 유형 선택</S.Title>
        <S.ButtonWrapper>
          <IconButton
            imgSrc="/src/assets/login/passport.png"
            buttonType={TravellerStatus}
            onClick={() => handleButtonClick('traveller')}
          >
            트래블러
          </IconButton>

          <IconButton
            imgSrc="/src/assets/login/location.png"
            buttonType={TravelleeStatus}
            onClick={() => handleButtonClick('travellee')}
          >
            트래블리
          </IconButton>
        </S.ButtonWrapper>
        {TravellerStatus === 'selected' && <Bubble bubbleType="traveller" />}
        {TravelleeStatus === 'selected' && <Bubble bubbleType="travellee" />}
      </S.Wrapper>
    )
  }
}
