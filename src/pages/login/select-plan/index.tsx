import { useState } from 'react'

import BackBar from '@/components/back-bar'
import IconButton, { ButtonType } from '@/components/icon-button'

import Bubble from '../components/bubble'
// eslint-disable-next-line import/order
import * as S from './SelectPlanPage.style'

export default function SelectPlanPage() {
  const [TravellerStatus, setTravellerStatus] = useState<ButtonType>('default')
  const [TravelleeStatus, setTravelleeStatus] = useState<ButtonType>('default')

  const handleButtonClick = (userType: 'traveller' | 'travellee') => {
    if (userType === 'traveller') {
      setTravellerStatus('selected')
      setTravelleeStatus('unselected')
    } else {
      setTravellerStatus('unselected')
      setTravelleeStatus('selected')
    }
  }
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
