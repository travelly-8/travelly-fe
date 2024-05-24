import * as S from '@/styles/authStyles'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'
import { useEffect, useState } from 'react'

export default function Login() {
  const isKeyboardOpen = useKeyboardDetection()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      const filled: any = email && password && !document.querySelector('p')
      setAllInputsFilled(filled)
    }
    checkInputs()

    setEmail((prevEmail) => {
      checkInputs()
      return prevEmail
    })
    setPassword((prevPassword) => {
      checkInputs()
      return prevPassword
    })

    const listener = () => {
      checkInputs()
    }
    document.addEventListener('input', listener)

    return () => {
      document.removeEventListener('input', listener)
    }
  }, [email, password])

  return (
    <S.Container isKeyboardOpen={isKeyboardOpen}>
      <S.Header>
        <S.ArrowIcon src="/src/assets/common/arrow-left.svg" alt="Back" />
      </S.Header>
      <S.Title>이메일로 로그인</S.Title>
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
          color={allInputsFilled ? 'primary' : 'disabled'}
          size="large"
        >
          로그인
        </RectangleButton>
      </S.ButtonContainer>
      <S.LinkContainer>
        <S.LinkText>아이디 | 비밀번호 찾기</S.LinkText>
      </S.LinkContainer>
    </S.Container>
  )
}
