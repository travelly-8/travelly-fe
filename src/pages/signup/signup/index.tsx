import { useEffect, useRef, useState } from 'react'

import * as S from '@/styles/authStyles'
import useKeyboardDetection from '@/utils/useKeyboardDetection'

import BackBar from '@components/back-bar'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'

export default function SignupPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      const filled: boolean =
        !!name &&
        !!email &&
        !!password &&
        !!passwordCheck &&
        !document.querySelector('p')
      setAllInputsFilled(filled)
    }

    checkInputs()
  }, [name, email, password, passwordCheck])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <BackBar />
      <S.Container isKeyboardOpen={isKeyboardOpen}>
        <S.Title>이메일로 회원가입</S.Title>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <Input
              inputType="name"
              placeholder="name"
              inputAccessedFor="signup"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              inputType="email"
              placeholder="email"
              inputAccessedFor="signup"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              inputType="password"
              placeholder="password"
              inputAccessedFor="signup"
              value={password}
              inputRef={passwordInputRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              inputType="password_check"
              placeholder="password_check"
              inputAccessedFor="signup"
              value={passwordCheck}
              passwordValue={passwordInputRef.current?.value}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <RectangleButton
              type="submit"
              color={allInputsFilled ? 'primary' : 'disabled'}
              size="large"
              disabled={!allInputsFilled}
            >
              회원 가입
            </RectangleButton>
          </S.ButtonContainer>
        </form>
      </S.Container>
    </>
  )
}
