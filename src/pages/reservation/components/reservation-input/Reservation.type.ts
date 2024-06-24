import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form'

export interface IReservationInputProps {
  nameRegister?: UseFormRegisterReturn
  phoneRegister?: UseFormRegisterReturn
  emailRegister?: UseFormRegisterReturn
  errors?: FieldErrors
  handleSubmit?: UseFormHandleSubmit<IReservationInputState>
  onSubmit?: SubmitHandler<IReservationInputState>
  disabled?: boolean
  defaultValues?: IReservationInputState
  setValue?: UseFormSetValue<Omit<IReservationInputState, 'date'>>
}

export interface IReservationInputState {
  name: string
  phone?: string
  email: string
  date?: string
}
