import { getFindId } from '@/api/authAPI'
import isAxiosError from '@/utils/isAxiosError'
import Input from '@components/input'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import React, { useEffect, useState } from 'react'
import * as S from './EmailRecoverySearch.style'
import {
  IEmailRecoverySearchProps,
  IErrorResponse,
} from './EmailRecoverySearch.type'

const EmailRecoverySearch: React.FC<IEmailRecoverySearchProps> = ({
  onSearchSuccess,
}) => {
  const [nickname, setNickname] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (nickname.length >= 2) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [nickname])

  const handleSearchClick = async () => {
    try {
      const response = await getFindId(nickname)
      const { email, createdDate } = response.data
      onSearchSuccess(email, createdDate)
    } catch (err) {
      if (isAxiosError<IErrorResponse>(err)) {
        if (err.response && err.response.data) {
          alert(err.response.data.message)
        }
      }
    }
  }

  return (
    <>
      <PageHeader />
      <S.Title>이메일 조회하기</S.Title>
      <S.InputWrapper>
        <Input
          inputType="name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <RectangleButton
          size="large"
          color={isButtonDisabled ? 'disabled' : undefined}
          onClick={handleSearchClick}
          disabled={isButtonDisabled}
        >
          가입 이메일 조회
        </RectangleButton>
      </S.ButtonWrapper>
    </>
  )
}

export default EmailRecoverySearch
