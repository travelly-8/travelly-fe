import { useState } from 'react'

import { postSignup } from '@/api/authAPI'
import { useFormValidation } from '@/hooks/useFormValidation'
import isAxiosError from '@/utils/isAxiosError'
import useKeyboardDetection from '@/utils/useKeyboardDetection'
import {
  signupEmailValidate,
  signupNameValidate,
  signupPasswordCheckValidate,
  signupPasswordValidate,
} from '@/utils/validate'

import FormContainer from '@components/form-container'
import Input from '@components/input'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { IErrorResponse, IFormData } from './Signup.type'

export default function SignupPage() {
  const isKeyboardOpen = useKeyboardDetection()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: 'onChange',
  })
  const name = watch('name')
  const email = watch('email')
  const password = watch('password')
  const passwordCheck = watch('passwordCheck')
  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [nameError, setNameError] = useState<string | undefined>(undefined)
  const navigate = useNavigate()

  const allInputsFilled = useFormValidation(
    { name, email, password, passwordCheck },
    errors,
    isValid,
    [!emailError, !nameError],
  )

  const onSubmit = async (data: IFormData) => {
    try {
      await postSignup({
        nickname: data.name,
        email: data.email,
        password: data.password,
      })
      navigate('/signup/end')
    } catch (error) {
      if (isAxiosError(error)) {
        const responseData = error.response?.data as IErrorResponse
        if (responseData.code === 'M001') {
          setEmailError(responseData.message)
        } else if (responseData.code === 'M004') {
          setNameError(responseData.message)
        }
      } else {
        console.error('login error:', (error as Error).message)
      }
    }
  }

  return (
    <FormContainer
      isKeyboardOpen={isKeyboardOpen}
      title="이메일로 회원가입"
      onSubmit={handleSubmit(onSubmit)}
      allInputsFilled={allInputsFilled}
      buttonText="회원 가입"
    >
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
            errorType={
              nameError || (errors.name ? errors.name.message : undefined)
            }
            onChange={(e) => {
              setNameError(undefined)
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
        rules={{ validate: signupPasswordValidate }}
        render={({ field }) => (
          <Input
            {...field}
            inputType="password"
            placeholder="password"
            errorType={errors.password ? errors.password.message : undefined}
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
          validate: (value) => signupPasswordCheckValidate(value, { password }),
        }}
        render={({ field }) => (
          <Input
            {...field}
            inputType="passwordCheck"
            placeholder="passwordCheck"
            passwordValue={password}
            errorType={
              errors.passwordCheck ? errors.passwordCheck.message : undefined
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
    </FormContainer>
  )
}
