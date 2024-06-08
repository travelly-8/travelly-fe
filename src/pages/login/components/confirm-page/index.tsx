import rocket from '@/assets/login/rocket.png'

import { SheetSliceState, sheet } from '@/store/sheet-slice'

import { user } from '@/store/user-slice'

import RectangleButton from '@components/rectangle-button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './ConfirmPage.style'

const ConfirmPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  const handleCreateAccount = () => {
    navigate('/')
    dispatch(user({ newUser: false }))
  }

  return (
    <S.Wrapper>
      <S.Img src={rocket} alt="회원 유형 선택 확인" />
      <S.UpperText>{sheetReducer.text}</S.UpperText>
      <S.LowerText>회원 계정을 생성 하시겠습니까?</S.LowerText>
      <RectangleButton size="medium" onClick={handleCreateAccount}>
        계정 생성
      </RectangleButton>
      <S.BackButton
        onClick={() =>
          dispatch(sheet({ name: 'select-plan-confirm', status: false }))
        }
      >
        &lt; 다시 선택하기
      </S.BackButton>
    </S.Wrapper>
  )
}

export default ConfirmPage
