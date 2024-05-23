import { ChangeEvent, FocusEvent, RefObject } from 'react'

export interface InputValuesType {
  [key: string]: string
}

export interface InputProps {
  inputType?: string
  inputRef?: RefObject<HTMLInputElement>
  errorType?: string
  dataArray?: string[]
  focused?: boolean
  selectData?: (data: string) => void
  value?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  blurEvent?: () => void
}

interface ValidationRule {
  value: boolean | number | RegExp
  message: string
}

interface InputValidation {
  required?: ValidationRule
  pattern?: ValidationRule
  minLength?: ValidationRule
  maxLength?: ValidationRule
}

interface InputAttributes {
  placeholder: string
  type?: string
}

interface SignInInput {
  attributes: InputAttributes
  validate: InputValidation
}

export interface SignInInputsType {
  [key: string]: SignInInput
}
