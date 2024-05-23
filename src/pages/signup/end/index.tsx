import * as S from './SignupEndPage.style'

export default function SignupEndPage() {
  //TODO: 회원가입 버튼 클릭 후 키프레임 애니메이션 추가

  return (
    <S.Wrapper>
      <S.Icon src="/src/assets/signup/bag.png" alt="회원가입 완료" />
      <S.TextWrapper>
        <S.UpperText>회원가입을 축하드려요!</S.UpperText>
        <S.LowerText>이제 함께 여행을 떠나볼까요?</S.LowerText>
      </S.TextWrapper>
      {/* TODO: 공통 버튼 컴포넌트로 교체 */}
      <button>이메일로 로그인</button>
    </S.Wrapper>
  )
}
