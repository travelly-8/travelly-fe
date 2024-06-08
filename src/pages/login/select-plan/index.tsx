import IconButton from '@/components/icon-button'
import { SheetSliceState, sheet } from '@/store/sheet-slice'
import BackBar from '@components/back-bar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bubble from '../components/bubble'
import ConfirmPage from '../components/confirm-page'
// eslint-disable-next-line import/order
import type { ButtonType } from '@components/icon-button/IconButton.type'
import * as S from './SelectPlanPage.style'

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
