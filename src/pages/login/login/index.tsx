import { postLogin } from '@/api/authAPI'
import { useFormValidation } from '@/hooks/useFormValidation'
import isAxiosError from '@/utils/isAxiosError'
import { saveTokens } from '@/utils/tokenStorage'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import { loginEmailValidate, loginPasswordValidate } from '@/utils/validate'
import FormContainer from '@components/form-container'
import Input from '@components/input'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { IErrorResponse, IFormData } from './Login.type'

export default function LoginPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: 'onChange',
  })
  const email = watch('email')
  const password = watch('password')
  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  )

  const allInputsFilled = useFormValidation(
    { email, password },
    errors,
    isValid,
    [!emailError, !passwordError],
  )

  const onSubmit = async (data: IFormData) => {
    try {
      const response = await postLogin(data)
      const { accessToken, refreshToken } = response.data.token
      const { newUser } = response.data
      saveTokens(accessToken, refreshToken)
      if (newUser) {
        navigate('/select-plan')
      } else {
        navigate('/browsing')
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const responseData = error.response?.data as IErrorResponse
        if (responseData.code === 'M002') {
          setEmailError(responseData.message)
        } else if (responseData.code === 'M003') {
          setPasswordError(responseData.message)
        }
      } else {
        // console.error('Login failed:', (error as Error).message)
      }
    }
  }

  return (
    <FormContainer
      isKeyboardOpen={isKeyboardOpen}
      title="이메일로 로그인"
      onSubmit={handleSubmit(onSubmit)}
      allInputsFilled={allInputsFilled}
      buttonText="로그인"
    >
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
            errorType={
              emailError || (errors.email ? errors.email.message : undefined)
            }
            onChange={(e) => {
              setEmailError(undefined)
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
              passwordError ||
              (errors.password ? errors.password.message : undefined)
            }
            onChange={(e) => {
              setPasswordError(undefined)
              field.onChange(e)
              setValue('password', e.target.value, { shouldValidate: true })
            }}
          />
        )}
      />
    </FormContainer>
  )
}
