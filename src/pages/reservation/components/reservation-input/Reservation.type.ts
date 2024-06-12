import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
} from 'react-hook-form'

export interface IReservationInputProps {
  nameRegister: UseFormRegisterReturn
  phoneRegister: UseFormRegisterReturn
  emailRegister: UseFormRegisterReturn
  errors: FieldErrors
  handleSubmit: UseFormHandleSubmit<IReservationInputState>
  onSubmit: SubmitHandler<IReservationInputState>
  disabled?: boolean
}

export interface IReservationInputState {
  name: string
  phone: string
  email: string
}
