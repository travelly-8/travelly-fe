import * as S from './SignupPage.style'

export default function SignupPage() {
  return (
    <S.Wrapper>
      <S.Image src="src/assets/signup/signup.png" alt="signup" />
      {/* TODO: 공통 버튼 컴포넌트로 교체 */}
      <p>이메일로 가입하기</p>
      <S.StartSNS>
        <S.Bubble src="src/assets/signup/bubble.png" alt="간편하게 시작" />
        <S.Sns src="src/assets/signup/naver.svg" alt="네이버" />
        <S.Sns src="src/assets/signup/google.png" alt="구글" />
      </S.StartSNS>
      <S.OtherWay>
        <S.Find>
          아이디&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;비밀번호 찾기
        </S.Find>
        <S.EmailLogin>이메일로 로그인</S.EmailLogin>
      </S.OtherWay>
    </S.Wrapper>
  )
}
