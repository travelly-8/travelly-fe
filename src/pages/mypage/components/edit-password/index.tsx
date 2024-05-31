import { useEffect, useState } from 'react'

import {
  signupPasswordCheckValidate,
  signupPasswordValidate,
} from '@/utils/validate'

import Input from '@components/input'
import RectangleButton from '@components/rectangle-button'
import { ColorType } from '@components/rectangle-button/RectangleButton.type'
import SheetHeader from '@components/sheet-header'
import { Controller, useForm } from 'react-hook-form'

import * as S from './EditPasswordPage.style'

interface FormData {
  prevPassword: string
  newPassword: string
  newPasswordCheck: string
}

export default function EditPasswordPage({ onClick }: { onClick: () => void }) {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsdisabled({ color: 'primary', disabled: true })
    onClick()
  }

  //TODO: RectangleButton 리팩터링 후 코드 수정
  interface IDisabled {
    color: ColorType
    disabled: boolean
  }
  const [isDisabled, setIsdisabled] = useState<IDisabled>({
    color: 'disabled',
    disabled: false,
  })

  const prevPassword = watch('prevPassword')
  const newPassword = watch('newPassword')
  const newPasswordCheck = watch('newPasswordCheck')

  useEffect(() => {
    if (errors.prevPassword && errors.newPassword && errors.newPasswordCheck) {
      setIsdisabled({ color: 'primary', disabled: false })
    } else {
      setIsdisabled({ color: 'disabled', disabled: true })
    }
  }, [prevPassword, newPassword, newPasswordCheck, errors])

  useEffect(() => {
    trigger('newPasswordCheck').then(() => {
      const filled =
        !!prevPassword &&
        !!newPassword &&
        !!newPasswordCheck &&
        Object.keys(errors).length === 0
      filled && setIsdisabled({ color: 'primary', disabled: false })
    })
  }, [prevPassword, newPassword, newPasswordCheck, trigger, errors])

  //TODO: 기존 비밀번호와 비교하는 validate 함수 만들기
  const checkPrevPassword = () => {
    return true
  }

  return (
    <S.Wrapper>
      <SheetHeader sheetName="password">
        <S.Title>비밀번호 재설정</S.Title>
      </SheetHeader>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="prevPassword"
            control={control}
            defaultValue=""
            rules={{
              validate: checkPrevPassword,
            }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="prevPassword"
                placeholder="prevPassword"
                errorType={
                  errors.prevPassword ? errors.prevPassword.message : undefined
                }
                onChange={(e) => {
                  field.onChange(e)
                  setValue('prevPassword', e.target.value, {
                    shouldValidate: true,
                  })
                }}
              />
            )}
          />
          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            rules={{
              validate: signupPasswordValidate,
            }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="newPassword"
                placeholder="newPassword"
                errorType={
                  errors.newPassword ? errors.newPassword.message : undefined
                }
                onChange={(e) => {
                  field.onChange(e)
                  setValue('newPassword', e.target.value, {
                    shouldValidate: true,
                  })
                }}
              />
            )}
          />
          <Controller
            name="newPasswordCheck"
            control={control}
            defaultValue=""
            rules={{
              validate: (value) =>
                signupPasswordCheckValidate(value, { password: newPassword }),
            }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="newPasswordCheck"
                placeholder="newPasswordCheck"
                errorType={
                  errors.newPasswordCheck
                    ? errors.newPasswordCheck.message
                    : undefined
                }
                onChange={(e) => {
                  field.onChange(e)
                  setValue('newPasswordCheck', e.target.value, {
                    shouldValidate: true,
                  })
                }}
              />
            )}
          />
          <RectangleButton
            type="submit"
            size="large"
            color={isDisabled.color}
            disabled={isDisabled.disabled}
          >
            저장
          </RectangleButton>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}
