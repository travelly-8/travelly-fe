/* eslint-disable import/order */
import { useEffect, useState } from 'react'

import IconButton from '@/components/icon-button'
import { SheetSliceState, sheet } from '@/store/sheet-slice'

import BackBar from '@components/back-bar'
import { useDispatch, useSelector } from 'react-redux'

import Bubble from '../components/bubble'
import ConfirmPage from '../components/confirm-page'
import * as S from './SelectPlanPage.style'

import type { ButtonType } from '@components/icon-button/IconButton.type'

export default function SelectPlanPage() {
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const [TravellerStatus, setTravellerStatus] = useState<ButtonType>('default')
  const [TravelleeStatus, setTravelleeStatus] = useState<ButtonType>('default')

  useEffect(() => {
    dispatch(sheet({ name: 'select-plan-confirm', status: false, text: '' }))
  }, [])

  const openSheet = (text: string) => {
    dispatch(sheet({ name: 'select-plan-confirm', status: true, text: text }))
    return
  }

  const handleButtonClick = (userType: 'traveller' | 'travellee') => {
    if (userType === 'traveller') {
      if (TravellerStatus === 'selected') openSheet('트래블러(구매자)')
      setTravellerStatus('selected')
      setTravelleeStatus('unselected')
    } else {
      if (TravelleeStatus === 'selected') openSheet('트래블리(판매자)')
      setTravellerStatus('unselected')
      setTravelleeStatus('selected')
    }
  }

  if (sheetReducer.status) {
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
