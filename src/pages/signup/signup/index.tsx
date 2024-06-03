import { postSignup } from '@/api/authAPI'
import * as S from '@/styles/authStyles'
import isAxiosError from '@/utils/isAxiosError'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import {
  signupEmailValidate,
  signupNameValidate,
  signupPasswordCheckValidate,
  signupPasswordValidate,
} from '@/utils/validate'
import BackBar from '@components/back-bar'
import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface FormData {
  name: string
  email: string
  password: string
  passwordCheck: string
}

export default function SignupPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>()
  const name = watch('name')
  const email = watch('email')
  const password = watch('password')
  const passwordCheck = watch('passwordCheck')
  const [allInputsFilled, setAllInputsFilled] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data: FormData) => {
    console.log(
      `nickname: ${data.name} email: ${data.email} password: ${data.password}`,
    )
    try {
      const response = await postSignup({
        nickname: data.name,
        email: data.email,
        password: data.password,
      })
      console.log('Signup successful:', response.data)
      navigate('/signup/end')
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Signup failed:', error.response?.data)
      } else {
        console.error('Signup failed:', (error as Error).message)
      }
    }
  }

  useEffect(() => {
    const checkInputs = () => {
      const filled =
        !!name &&
        !!email &&
        !!password &&
        !!passwordCheck &&
        Object.keys(errors).length === 0
      setAllInputsFilled(filled)
    }

    checkInputs()
  }, [name, email, password, passwordCheck, errors])

  useEffect(() => {
    trigger('passwordCheck').then(() => {
      const filled =
        !!name &&
        !!email &&
        !!password &&
        !!passwordCheck &&
        Object.keys(errors).length === 0
      setAllInputsFilled(filled)
    })
  }, [password, passwordCheck, name, email, trigger, errors])

  return (
    <>
      <BackBar />
      <S.Container $isKeyboardOpen={isKeyboardOpen}>
        <S.Title>이메일로 회원가입</S.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ validate: signupNameValidate }}
              render={({ field }) => (
                <Input
                  {...field}
                  inputType="name"
                  placeholder="name"
                  errorType={errors.name ? errors.name.message : undefined}
                  onChange={(e) => {
                    field.onChange(e)
                    setValue('name', e.target.value, { shouldValidate: true })
                  }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ validate: signupEmailValidate }}
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
              rules={{ validate: signupPasswordValidate }}
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
            <Controller
              name="passwordCheck"
              control={control}
              defaultValue=""
              rules={{
                validate: (value) =>
                  signupPasswordCheckValidate(value, { password }),
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  inputType="passwordCheck"
                  placeholder="passwordCheck"
                  passwordValue={password}
                  errorType={
                    errors.passwordCheck
                      ? errors.passwordCheck.message
                      : undefined
                  }
                  onChange={(e) => {
                    field.onChange(e)
                    setValue('passwordCheck', e.target.value, {
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
              회원 가입
            </RectangleButton>
          </S.ButtonContainer>
        </form>
      </S.Container>
    </>
  )
}
