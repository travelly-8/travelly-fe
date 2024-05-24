import * as S from '@/styles/authStyles'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'
import { useEffect, useRef, useState } from 'react'

export default function Signup() {
  const isKeyboardOpen = useKeyboardDetection()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      const filled: any =
        name &&
        email &&
        password &&
        passwordCheck &&
        !document.querySelector('p')
      setAllInputsFilled(filled)
    }

    checkInputs()

    setName((prevName) => {
      checkInputs()
      return prevName
    })
    setEmail((prevEmail) => {
      checkInputs()
      return prevEmail
    })
    setPassword((prevPassword) => {
      checkInputs()
      return prevPassword
    })
    setPasswordCheck((prevPasswordCheck) => {
      checkInputs()
      return prevPasswordCheck
    })

    const listener = () => {
      checkInputs()
    }
    document.addEventListener('input', listener)

    return () => {
      document.removeEventListener('input', listener)
    }
  }, [name, email, password, passwordCheck])

  return (
    <S.Container isKeyboardOpen={isKeyboardOpen}>
      <S.Header>
        <S.ArrowIcon src="/src/assets/common/arrow-left.svg" alt="Back" />
      </S.Header>
      <S.Title>이메일로 회원가입</S.Title>
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
          color={allInputsFilled ? 'primary' : 'disabled'}
          size="large"
        >
          회원 가입
        </RectangleButton>
      </S.ButtonContainer>
    </S.Container>
  )
}
