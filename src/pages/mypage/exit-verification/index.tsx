import Input from '@components/input'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
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
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    //TODO: 비밀번호 확인 후, 일치하면 탈퇴하기
    navigate('/goodbye')
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
            //TODO: 기존 비밀번호와 비교하는 validate 함수 만들기
            // rules={{
            //   validate: loginPasswordValidate,
            // }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="password"
                placeholder="password"
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
          <RectangleButton size="large" disabled={false}>
            <S.ButtonText>탈퇴하기</S.ButtonText>
          </RectangleButton>
        </S.InputForm>
      </S.Content>
    </S.Wrapper>
  )
}
