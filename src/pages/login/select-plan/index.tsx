import { useEffect, useState } from 'react'
import { putRole } from '@/api/authAPI'
import location from '@/assets/login/location.png'
import passport from '@/assets/login/passport.png'
import IconButton from '@/components/icon-button'
import ConfirmPage from '@/pages/login/components/confirm-page'
import { SheetSliceState, sheet } from '@/store/sheet-slice'
import isAxiosError from '@/utils/isAxiosError'
import { getAccessToken, refreshAccessToken } from '@/utils/tokenStorage'
import BackBar from '@components/back-bar'
import { useDispatch, useSelector } from 'react-redux'
import Bubble from '../components/bubble'
import * as S from './SelectPlanPage.style'

// eslint-disable-next-line import/order
import type { ButtonType } from '@components/icon-button/IconButton.type'

export default function SelectPlanPage() {
  const dispatch = useDispatch()
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
      if (travellerStatus === 'selected') {
        try {
          let token = getAccessToken()
          if (!token) {
            token = await refreshAccessToken()
          }
          await putRole(userType)
          openSheet('traveller')
        } catch (error) {
          if (isAxiosError(error)) {
            // console.error('Login failed:', error.response?.data)
          } else {
            // console.error('Login failed:', (error as Error).message)
          }
        }
      } else {
        setTravellerStatus('selected')
        setTravellyStatus('unselected')
      }
    } else {
      if (travellyStatus === 'selected') {
        try {
          let token = getAccessToken()
          if (!token) {
            token = await refreshAccessToken()
          }
          await putRole(userType)
          openSheet('travelly')
        } catch (error) {
          if (isAxiosError(error)) {
            // console.error('Login failed:', error.response?.data)
          } else {
            // console.error('Login failed:', (error as Error).message)
          }
        }
      } else {
        setTravellerStatus('unselected')
        setTravellyStatus('selected')
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
