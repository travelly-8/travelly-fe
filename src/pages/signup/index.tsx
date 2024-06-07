import { useEffect, useState } from 'react'

import bubble from '@/assets/signup/bubble.png'
import google from '@/assets/signup/google.png'
import naver from '@/assets/signup/naver.svg'
import signup from '@/assets/signup/signup.png'

import RectangleButton from '@components/rectangle-button'
import { useNavigate } from 'react-router-dom'

import * as S from './SignupStartPage.style'
import SplashPage from './splash'

export default function SignupStartPage() {
  const [isSplashOn, setIsSplashOn] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashOn(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleNaverLogin = () => {
    const clientId = 'Ka9kJLyk9psbYa8p1OGf'
    const redirectURI = encodeURIComponent(
      'http://localhost:5173/auth/callback/naver',
    )
    const state = Math.random().toString(36).substring(7)
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}`
    window.location.href = naverAuthUrl
  }

  const handleGoogleLogin = () => {
    const clientId =
      '730247200859-fmkmnba4hr4hjk5vf52358ps6p2elv41.apps.googleusercontent.com'
    const redirectURI = encodeURIComponent(
      'http://localhost:5173/auth/callback/google',
    )
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&scope=profile email`
    window.location.href = googleAuthUrl
  }

  if (isSplashOn) {
    return <SplashPage />
  } else {
    return (
      <S.Wrapper>
        <S.Image src={signup} alt="signup" />
        <RectangleButton size="medium" onClick={() => navigate('/signup')}>
          이메일로 가입하기
        </RectangleButton>
        <S.StartSNS>
          <S.Bubble src={bubble} alt="간편하게 시작" />
          <S.Sns src={naver} alt="네이버" onClick={handleNaverLogin} />
          <S.Sns src={google} alt="구글" onClick={handleGoogleLogin} />
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
