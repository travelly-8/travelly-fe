import { handleLoginClick } from '@/utils/handleLogin'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PasswordRecovery from '../../password-recovery'
import * as S from './EmailRecoveryResult.style'
import { IEmailRecoveryResultProps } from './EmailRecoveryResult.type'

const maskEmail = (email: string): string => {
  const [localPart, domain] = email.split('@')
  if (localPart.length <= 4) {
    return email
  }
  const maskedLocalPart =
    localPart.slice(0, 4) + '*'.repeat(localPart.length - 4)
  return `${maskedLocalPart}@${domain}`
}

const EmailRecoveryResult: React.FC<IEmailRecoveryResultProps> = ({
  email,
  createdDate,
}) => {
  const navigate = useNavigate()
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false)

  const handlePasswordButtonClick = () => {
    setShowPasswordRecovery(true)
  }

  if (showPasswordRecovery) {
    return <PasswordRecovery />
  }

  return (
    <>
      <PageHeader />
      <S.Title>이메일 조회 결과</S.Title>
      <S.Wrapper>
        <div>
          <S.Email>{maskEmail(email)}</S.Email>
          <S.CreateDate>{`${createdDate}에 가입`}</S.CreateDate>
        </div>
      </S.Wrapper>
      <S.ButtonWrapper>
        <RectangleButton
          size="large"
          onClick={() => handleLoginClick(navigate)}
        >
          이메일로 로그인
        </RectangleButton>
        <S.BackButton onClick={handlePasswordButtonClick}>
          비밀번호 찾기 &gt;
        </S.BackButton>
      </S.ButtonWrapper>
    </>
  )
}

export default EmailRecoveryResult
