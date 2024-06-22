import { handleLoginClick } from '@/utils/handleLogin'
import BackBar from '@components/back-bar'
import RectangleButton from '@components/rectangle-button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Recovery.style'
import EmailRecovery from './email-recovery'
import PasswordRecovery from './password-recovery'

const Recovery = () => {
  const [showEmailRecovery, setShowEmailRecovery] = useState(false)
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false)
  const navigate = useNavigate()

  const handleEmailButtonClick = () => {
    setShowEmailRecovery(true)
  }

  const handlePasswordButtonClick = () => {
    setShowPasswordRecovery(true)
  }

  const handleNavigateLogin = () => {
    handleLoginClick(navigate)
  }

  if (showEmailRecovery) {
    return <EmailRecovery />
  }

  if (showPasswordRecovery) {
    return <PasswordRecovery />
  }

  return (
    <S.Wrapper>
      <BackBar />
      <S.Title>이메일・비밀번호 조회</S.Title>
      <S.ButtonWrapper>
        <RectangleButton size="large" onClick={handleEmailButtonClick}>
          이메일 찾기
        </RectangleButton>
        <RectangleButton size="large" onClick={handlePasswordButtonClick}>
          비밀번호 찾기
        </RectangleButton>
      </S.ButtonWrapper>
      <S.BackButton onClick={handleNavigateLogin}>
        이메일로 로그인 &gt;
      </S.BackButton>
    </S.Wrapper>
  )
}

export default Recovery
