import { useForm } from 'react-hook-form'

import {
  IReservationInputProps,
  IReservationInputState,
} from './Reservation.type'
import * as S from './ReservationInput.style'

const ReservationInput: React.FC<IReservationInputProps> = ({
  disabled = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReservationInputState>()
  const onSubmit = (data: IReservationInputState) => {
    console.log(data) // 나중에 수정
  }
  const defaultValues = {
    name: '홍길동',
    phone: '01012345678',
    email: 'abcd@naver.com',
  }
  const nameProps = { disabled, defaultValue: defaultValues.name }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <S.InputContainer>
        <S.InputWrapper>
          <S.Label>예약자명</S.Label>
          <S.Input
            {...register('name', { required: '예약자명을 입력해주세요' })}
            type="text"
            placeholder="예약자명"
            defaultValue={disabled ? defaultValues.name : undefined}
            disabled={disabled}
          />
          {errors.name && <S.Error>{errors.name.message as string}</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>연락처</S.Label>
          <S.Input
            {...register('phone', {
              required: '연락처를 입력해주세요',
              pattern: {
                value: /^[0-9\b -]{7,13}$/,
                message: '올바른 연락처 형식을 입력해주세요',
              },
            })}
            type="tel"
            placeholder="연락처"
            defaultValue={disabled ? defaultValues.phone : undefined}
            disabled={disabled}
          />
          {errors.phone && <S.Error>{errors.phone.message as string}</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: '올바른 이메일 형식을 입력해주세요',
              },
            })}
            type="text"
            placeholder="이메일"
            defaultValue={disabled ? defaultValues.email : undefined}
            disabled={disabled}
          />
          {errors.email && <S.Error>{errors.email.message as string}</S.Error>}
        </S.InputWrapper>
      </S.InputContainer>
    </form> // 버튼은 작동 확인 위한 임시버튼
  )
}

export default ReservationInput
