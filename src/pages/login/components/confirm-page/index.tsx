import { ModalSliceState, modal } from '@/store/modal'

import { useDispatch, useSelector } from 'react-redux'

import * as S from './ConfirmPage.style'

const ConfirmPage = () => {
  const dispatch = useDispatch()
  const modalReducer = useSelector(
    (state: ModalSliceState) => state.modal.value,
  )
  return (
    <S.Wrapper>
      <S.Img src="/src/assets/login/rocket.png" alt="회원 유형 선택 확인" />
      <S.UpperText>{modalReducer.text}</S.UpperText>
      <S.LowerText>회원 계정을 생성 하시겠습니까?</S.LowerText>
      {/* TODO: 공통 버튼 컴포넌트로 교체 */}
      <button>계정 생성</button>
      <S.BackButton
        onClick={() =>
          dispatch(modal({ name: 'select-plan-confirm', status: false }))
        }
      >
        &lt; 다시 선택하기
      </S.BackButton>
    </S.Wrapper>
  )
}

export default ConfirmPage
