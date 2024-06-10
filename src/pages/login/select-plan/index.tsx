import { useEffect, useState } from 'react'

import location from '@/assets/login/location.png'
import passport from '@/assets/login/passport.png'
import IconButton from '@/components/icon-button'
import Bubble from '@/pages/login/components/bubble'
import ConfirmPage from '@/pages/login/components/confirm-page'
import { SheetSliceState, sheet } from '@/store/sheet-slice'

import BackBar from '@components/back-bar'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './SelectPlanPage.style'

import type { ButtonType } from '@components/icon-button/IconButton.type'

export default function SelectPlanPage() {
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet?.value,
  )
  const [travellerStatus, setTravellerStatus] = useState<ButtonType>('default')
  const [travellyStatus, setTravellyStatus] = useState<ButtonType>('default')
  const [selectedRole, setSelectedRole] = useState<
    'traveller' | 'travelly' | null
  >(null)

  useEffect(() => {
    dispatch(sheet({ name: 'select-plan-confirm', status: false, text: '' }))
  }, [dispatch])

  const openSheet = (text: string) => {
    dispatch(sheet({ name: 'select-plan-confirm', status: true, text: text }))
  }

  const handleButtonClick = (userType: 'traveller' | 'travelly') => {
    setSelectedRole(userType)
    if (userType === 'traveller') {
      if (travellerStatus === 'selected') {
        openSheet('traveller')
      } else {
        setTravellerStatus('selected')
        setTravellyStatus('unselected')
      }
    } else {
      if (travellyStatus === 'selected') {
        openSheet('travelly')
      } else {
        setTravellerStatus('unselected')
        setTravellyStatus('selected')
      }
    }
  }

  if (sheetReducer?.status) {
    return <ConfirmPage selectedRole={selectedRole} />
  } else {
    return (
      <S.Wrapper>
        <BackBar />
        <S.Title>회원 유형 선택</S.Title>
        <S.ButtonWrapper>
          <IconButton
            imgSrc={passport}
            buttonType={travellerStatus}
            onClick={() => handleButtonClick('traveller')}
          >
            트래블러
          </IconButton>

          <IconButton
            imgSrc={location}
            buttonType={travellyStatus}
            onClick={() => handleButtonClick('travelly')}
          >
            트래블리
          </IconButton>
        </S.ButtonWrapper>
        {travellerStatus === 'selected' && <Bubble bubbleType="traveller" />}
        {travellyStatus === 'selected' && <Bubble bubbleType="travelly" />}
      </S.Wrapper>
    )
  }
}
