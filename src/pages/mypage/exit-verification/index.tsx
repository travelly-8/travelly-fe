import { useEffect, useState } from 'react'

import Input from '@components/input'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import { ColorType } from '@components/rectangle-button/RectangleButton.type'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as S from './ExitVerification.style'

interface FormData {
  passwordCheck: string
}

export default function ExitVerificationPage() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  //TODO: RectangleButton 리팩터링 후 코드 수정
  const passwordCheck = watch('passwordCheck')
  interface IDisabled {
    color: ColorType
    disabled: boolean
  }
  const [isDisabled, setIsdisabled] = useState<IDisabled>({
    color: 'disabled',
    disabled: false,
  })

  useEffect(() => {
    if (passwordCheck?.length > 0) {
      setIsdisabled({ color: 'primary', disabled: false })
    } else {
      setIsdisabled({ color: 'disabled', disabled: true })
    }
  }, [passwordCheck])

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsdisabled({ color: 'primary', disabled: true })
    //TODO: 비밀번호 확인 후, 일치하면 탈퇴하기
    checkValidate() && navigate('/goodbye')
  }

  //TODO: 기존 비밀번호와 비교하는 validate 함수 만들기
  const checkValidate = () => {
    return true
  }
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Title>본인확인</S.Title>
      </PageHeader>
      <S.Content>
        <S.UpperText>탈퇴 전 본인확인이 필요합니다.</S.UpperText>
        <S.InputForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="passwordCheck"
            control={control}
            defaultValue=""
            rules={{
              validate: checkValidate,
            }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="passwordConfirm"
                placeholder="passwordConfirm"
                errorType={
                  errors.passwordCheck
                    ? errors.passwordCheck.message
                    : undefined
                }
                onChange={(e) => {
                  field.onChange(e)
                  setValue('passwordCheck', e.target.value, {
                    shouldValidate: false,
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
            탈퇴하기
          </RectangleButton>
        </S.InputForm>
      </S.Content>
    </S.Wrapper>
  )
}
