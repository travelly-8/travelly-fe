import { postFindPassword } from '@/api/authAPI'
import Input from '@components/input'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import React, { useEffect, useState } from 'react'
import * as S from './PasswordRecoverySearch.style'
import { IPasswordRecoverySearchProps } from './PasswordRecoverySearch.type'

const PasswordRecoverySearch: React.FC<IPasswordRecoverySearchProps> = ({
  onSearchSuccess,
}) => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (nickname.length >= 2 && email.length > 0) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [nickname, email])

  const handleSearchClick = async () => {
    setIsSubmitting(true)
    try {
      await postFindPassword(nickname, email)
      onSearchSuccess()
    } catch (error) {
      alert('이메일 혹은 비밀번호가 일치하지 않습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader />
      <S.Title>비밀번호 찾기</S.Title>
      <S.InputWrapper>
        <Input
          inputType="name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Input
          inputType="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <RectangleButton
          size="large"
          color={isButtonDisabled || isSubmitting ? 'disabled' : 'primary'}
          onClick={handleSearchClick}
        >
          비밀번호 전송
        </RectangleButton>
      </S.ButtonWrapper>
    </>
  )
}

export default PasswordRecoverySearch
