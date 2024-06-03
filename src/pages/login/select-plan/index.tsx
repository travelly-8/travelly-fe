import { putRole } from '@/api/authAPI'
import IconButton from '@/components/icon-button'
import { SheetSliceState, sheet } from '@/store/sheet-slice'
import isAxiosError from '@/utils/isAxiosError'
import { getAccessToken, refreshAccessToken } from '@/utils/tokenStorage'
import BackBar from '@components/back-bar'
import type { ButtonType } from '@components/icon-button/IconButton.type'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Bubble from '../components/bubble'
import ConfirmPage from '../components/confirm-page'
import * as S from './SelectPlanPage.style'

export default function SelectPlanPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const [travellerStatus, setTravellerStatus] = useState<ButtonType>('default')
  const [travellyStatus, setTravellyStatus] = useState<ButtonType>('default')

  useEffect(() => {
    dispatch(sheet({ name: 'select-plan-confirm', status: false, text: '' }))
  }, [dispatch])

  const openSheet = (text: string) => {
    dispatch(sheet({ name: 'select-plan-confirm', status: true, text: text }))
  }

  const handleButtonClick = async (userType: 'traveller' | 'travelly') => {
    if (userType === 'traveller') {
      setTravellerStatus('selected')
      setTravellyStatus('unselected')
    } else {
      setTravellerStatus('unselected')
      setTravellyStatus('selected')
    }

    try {
      let token = getAccessToken()
      if (!token) {
        token = await refreshAccessToken()
      }
      console.log(`Updating user type to: ${userType} with token: ${token}`)
      await putRole(userType)
      console.log('success')
      openSheet(userType === 'traveller' ? 'traveller' : 'travelly')
      navigate('/browsing')
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Login failed:', error.response?.data)
      } else {
        console.error('Login failed:', (error as Error).message)
      }
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
            buttonType={travellerStatus}
            onClick={() => handleButtonClick('traveller')}
          >
            트래블러
          </IconButton>

          <IconButton
            imgSrc="/src/assets/login/location.png"
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
