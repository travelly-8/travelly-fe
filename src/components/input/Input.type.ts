import { ChangeEvent, FocusEvent, RefObject } from 'react'

export type InputValuesType = {
  [key: string]: string
}

export type InputType =
  | 'name'
  | 'email'
  | 'password'
  | 'passwordCheck'
  | 'passwordConfirm'
  | 'prevPassword'
  | 'newPassword'
  | 'newPasswordCheck'
  | 'companyName'
  | 'productName'
  | 'price'
  | 'contact'
  | 'homepageUrl'

export interface IInput {
  inputType?: InputType
  inputRef?: RefObject<HTMLInputElement>
  passwordValue?: string
  errorType?: string | null | undefined
  focused?: boolean
  value?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

interface IValidationRule {
  value: boolean | number | RegExp
  message: string
}

interface IInputValidation {
  required?: IValidationRule
  pattern?: IValidationRule
  minLength?: IValidationRule
  maxLength?: IValidationRule
}

interface IInputAttributes {
  placeholder: string
  type?: string
}

interface ILoginInput {
  attributes: IInputAttributes
  validate: IInputValidation
}

export type LoginInputsType = {
  [key: string]: ILoginInput
}
