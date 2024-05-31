import { useEffect, useState } from 'react'

import * as S from '@/styles/authStyles'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import { loginEmailValidate, loginPasswordValidate } from '@/utils/validate'

import BackBar from '@components/back-bar'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'
import { Controller, useForm } from 'react-hook-form'

interface FormData {
  email: string
  password: string
}

export default function LoginPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>()
  const email = watch('email')
  const password = watch('password')
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  useEffect(() => {
    const checkInputs = () => {
      const filled = !!email && !!password && Object.keys(errors).length === 0
      setAllInputsFilled(filled)
    }

    checkInputs()
  }, [email, password, errors])

  return (
    <>
      <BackBar />
      <S.Container $isKeyboardOpen={isKeyboardOpen}>
        <S.Title>이메일로 로그인</S.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                validate: loginEmailValidate,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  inputType="email"
                  placeholder="email"
                  errorType={errors.email ? errors.email.message : undefined}
                  onChange={(e) => {
                    field.onChange(e)
                    setValue('email', e.target.value, { shouldValidate: true })
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                validate: loginPasswordValidate,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  inputType="password"
                  placeholder="password"
                  errorType={
                    errors.password ? errors.password.message : undefined
                  }
                  onChange={(e) => {
                    field.onChange(e)
                    setValue('password', e.target.value, {
                      shouldValidate: true,
                    })
                  }}
                />
              )}
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
