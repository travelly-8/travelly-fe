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
  defaultValues,
}) => {
  const preventDefaultSubmit = (event: React.FormEvent) => {
    event.preventDefault() //reservation-detail일때는 이벤트가 발생하지 않도록 설정
  }
  console.log('defaultValues', defaultValues)
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
            defaultValue={defaultValues ? defaultValues?.name : ''}
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
            defaultValue={defaultValues ? defaultValues?.phone : ''}
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
            defaultValue={defaultValues ? defaultValues?.email : ''}
            disabled={disabled}
          />
          {errors?.email && <S.Error>{errors.email.message as string}</S.Error>}
        </S.InputWrapper>
      </S.InputContainer>
    </form> // 버튼은 작동 확인 위한 임시버튼
  )
}

export default ReservationInput
