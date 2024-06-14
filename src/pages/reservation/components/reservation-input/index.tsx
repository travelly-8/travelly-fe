import { IReservationInputProps } from './Reservation.type'
import * as S from './ReservationInput.style'

const ReservationInput: React.FC<IReservationInputProps> = ({
  nameRegister,
  phoneRegister,
  emailRegister,
  errors,
  handleSubmit,
  onSubmit,
  disabled = false,
}) => {
  const defaultValues = {
    name: '홍길동',
    phone: '01012345678',
    email: 'abcd@naver.com',
  }
  const nameProps = { disabled, defaultValue: defaultValues.name }

  const preventDefaultSubmit = (event: React.FormEvent) => {
    event.preventDefault() //reservation-detail일때는 이벤트가 발생하지 않도록 설정
  }
  return (
    <form
      onSubmit={
        handleSubmit && onSubmit ? handleSubmit(onSubmit) : preventDefaultSubmit
      }
      style={{ width: '100%' }}
    >
      <S.InputContainer>
        <S.InputWrapper>
          <S.Label>예약자명</S.Label>
          <S.Input
            {...nameRegister}
            type="text"
            placeholder="예약자명"
            defaultValue={disabled ? defaultValues.name : undefined}
            disabled={disabled}
          />
          {errors?.name && <S.Error>{errors.name.message as string}</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>연락처</S.Label>
          <S.Input
            {...phoneRegister}
            type="tel"
            placeholder="연락처"
            defaultValue={disabled ? defaultValues.phone : undefined}
            disabled={disabled}
          />
          {errors?.phone && <S.Error>{errors.phone.message as string}</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Input
            {...emailRegister}
            type="text"
            placeholder="이메일"
            defaultValue={disabled ? defaultValues.email : undefined}
            disabled={disabled}
          />
          {errors?.email && <S.Error>{errors.email.message as string}</S.Error>}
        </S.InputWrapper>
      </S.InputContainer>
    </form> // 버튼은 작동 확인 위한 임시버튼
  )
}

export default ReservationInput
