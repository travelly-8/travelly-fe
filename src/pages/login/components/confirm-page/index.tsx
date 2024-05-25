import { SheetSliceState, sheet } from '@/store/sheet-slice'

import RectangleButton from '@components/rectangle-button'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ConfirmPage.style'

const ConfirmPage = () => {
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  return (
    <S.Wrapper>
      <S.Img src="/src/assets/login/rocket.png" alt="회원 유형 선택 확인" />
      <S.UpperText>{sheetReducer.text}</S.UpperText>
      <S.LowerText>회원 계정을 생성 하시겠습니까?</S.LowerText>
      <RectangleButton size="medium">계정 생성</RectangleButton>
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
