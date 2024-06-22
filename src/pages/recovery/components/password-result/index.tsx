import keyImg from '@/assets/common/key.svg'
import { handleLoginClick } from '@/utils/handleLogin'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './PasswordRecoveryResult.style'

const PasswordRecoveryResult: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <PageHeader />
      <S.IconWrapper>
        <S.KeyIcon src={keyImg} />
      </S.IconWrapper>
      <S.Wrapper>
        <S.Title>이메일 전송 완료!</S.Title>
        <S.SubTitle>이메일 보관함에서 비밀번호를 확인하세요!</S.SubTitle>
      </S.Wrapper>
      <S.ButtonWrapper>
        <RectangleButton
          size="medium"
          onClick={() => handleLoginClick(navigate)}
        >
          이메일로 로그인
        </RectangleButton>
      </S.ButtonWrapper>
      <S.TextWrapper>
        <S.Text>🔓 비밀번호 재설정 방법</S.Text>
        <S.Text> 마이 페이지 &gt; 프로필 카드 &gt; 비밀번호 재설정</S.Text>
      </S.TextWrapper>
    </>
  )
}

export default PasswordRecoveryResult
