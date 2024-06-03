import RectangleButton from '@components/rectangle-button'
import { useNavigate } from 'react-router-dom'

import * as S from './SignupEndPage.style'

export default function SignupEndPage() {
  //TODO: 회원가입 버튼 클릭 후 키프레임 애니메이션 추가
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <S.Wrapper>
      <S.Icon src="/src/assets/signup/bag.png" alt="회원가입 완료" />
      <S.TextWrapper>
        <S.UpperText>회원가입을 축하드려요!</S.UpperText>
        <S.LowerText>이제 함께 여행을 떠나볼까요?</S.LowerText>
      </S.TextWrapper>
      <RectangleButton onClick={handleLoginClick}>
        이메일로 로그인
      </RectangleButton>
    </S.Wrapper>
  )
}
