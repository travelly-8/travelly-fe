import { useState } from 'react'

import RectangleButton from '@components/rectangle-button'
import { useNavigate } from 'react-router-dom'

import * as S from './SignupStartPage.style'
import SplashPage from './splash'

export default function SignupStartPage() {
  const [isSplashOn, setIsSplashOn] = useState(true)
  const navigate = useNavigate()

  setTimeout(() => {
    setIsSplashOn(false)
  }, 1000)

  if (isSplashOn) {
    return <SplashPage />
  } else {
    return (
      <S.Wrapper>
        <S.Image src="/src/assets/signup/signup.png" alt="signup" />
        <RectangleButton size="medium" onClick={() => navigate('/signup')}>
          이메일로 가입하기
        </RectangleButton>
        <S.StartSNS>
          <S.Bubble src="/src/assets/signup/bubble.png" alt="간편하게 시작" />
          <S.Sns src="/src/assets/signup/naver.svg" alt="네이버" />
          <S.Sns src="/src/assets/signup/google.png" alt="구글" />
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
}
