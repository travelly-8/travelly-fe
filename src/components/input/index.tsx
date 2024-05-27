import { INPUT_LABELS, INPUT_PLACEHOLDER } from '@/constants/INPUT_VALUES'
import { useState } from 'react'
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordCheck,
} from '../../utils/validate'
import * as S from './Input.style'
import type { IInput } from './Input.type'
import eyeOffIcon from '/src/assets/common/eye-off.svg'
import eyeOnIcon from '/src/assets/common/eye-on.svg'

const Input = ({
  inputAccessedFor,
  inputType = 'default',
  inputRef,
  passwordValue = '',
  onBlur,
  value = '',
  placeholder = '',
  onChange,
  onFocus,
}: IInput) => {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = (value: string): string | null => {
    switch (inputType) {
      case 'name':
        return validateNickname(value, inputAccessedFor)
      case 'email':
        return validateEmail(value, inputAccessedFor)
      case 'password':
        return validatePassword(value, inputAccessedFor)
      case 'password_check':
        return validatePasswordCheck(value, passwordValue)
      default:
        return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    const errorMessage = validate(value)
    setError(errorMessage)
    if (onChange) {
      onChange(e)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const isPasswordType =
    inputType === 'password' || inputType === 'password_check'

  return (
    <S.StyledInputContainer>
      <S.StyledLabel htmlFor={inputType} errorType={error}>
        {INPUT_LABELS[inputType]}
      </S.StyledLabel>
      <S.StyledInputWrapper focused={focused} errorType={error}>
        <S.StyledInput
          id={inputType}
          type={
            isPasswordType ? (showPassword ? 'text' : 'password') : inputType
          }
          onBlur={() => {
            setFocused(false)
            onBlur && onBlur()
          }}
          onFocus={(e) => {
            setFocused(true)
            onFocus && onFocus(e)
          }}
          ref={inputRef}
          placeholder={
            INPUT_PLACEHOLDER[placeholder] || INPUT_PLACEHOLDER.default
          }
          value={inputValue}
          onChange={handleChange}
        />
        {isPasswordType && (
          <S.ToggleButton onClick={toggleShowPassword}>
            <img
              src={showPassword ? eyeOnIcon : eyeOffIcon}
              alt={showPassword ? 'Hide password' : 'Show password'}
            />
          </S.ToggleButton>
        )}
      </S.StyledInputWrapper>
      {error && <S.StyledError>*{error}</S.StyledError>}
    </S.StyledInputContainer>
  )
}

export default Input
