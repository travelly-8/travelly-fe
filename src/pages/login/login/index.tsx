import { useEffect, useState } from 'react'

import * as S from '@/styles/authStyles'
import useKeyboardDetection from '@/utils/useKeyboardDetection'

import BackBar from '@components/back-bar'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'

export default function LoginPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      const filled: boolean =
        !!email && !!password && !document.querySelector('p')
      setAllInputsFilled(filled)
    }

    checkInputs()
  }, [email, password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <BackBar />
      <S.Container isKeyboardOpen={isKeyboardOpen}>
        <S.Title>이메일로 로그인</S.Title>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <Input
              inputType="email"
              placeholder="email"
              inputAccessedFor="login"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              inputType="password"
              placeholder="password"
              inputAccessedFor="login"
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <RectangleButton
              type="submit"
              color={allInputsFilled ? 'primary' : 'disabled'}
              size="large"
              disabled={!allInputsFilled}
            >
              로그인
            </RectangleButton>
          </S.ButtonContainer>
        </form>
        <S.LinkContainer>
          <S.LinkText>아이디 | 비밀번호 찾기</S.LinkText>
        </S.LinkContainer>
      </S.Container>
    </>
  )
}
