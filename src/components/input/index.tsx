import {
  INPUT_ERROR_TYPE,
  INPUT_LABELS,
  INPUT_PLACEHOLDER,
} from '@/constants/INPUT_VALUES'
import eyeOffIcon from '@assets/common/eye-off.svg'
import eyeOnIcon from '@assets/common/eye-on.svg'
import { useState } from 'react'
import * as S from './Input.style'
import type { IInput } from './Input.type'

const Input: React.FunctionComponent<IInput> = ({
  inputAccessedFor,
  inputType = 'default',
  inputRef,
  blurEvent = () => console.log('blurred'),
  value = '',
  placeholder = '',
  onChange,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateNickname = (value: string): string | null => {
    if (inputAccessedFor === 'signup' && value === '이미 가입된 닉네임') {
      return INPUT_ERROR_TYPE.name_duplicated
    }
    const totalLength = [...value].reduce((acc, char) => {
      const charCode = char.charCodeAt(0)
      if (charCode >= 44032 && charCode <= 55199) {
        return acc + 2
      }
      if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        return acc + 1
      }
      if (charCode >= 48 && charCode <= 57) {
        return acc + 1
      }
      return acc
    }, 0)

    if (totalLength < 3 || totalLength > 16) {
      return INPUT_ERROR_TYPE.name_invalid_regex
    }
    return null
  }

  const validateEmail = (value: string): string | null => {
    if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      return INPUT_ERROR_TYPE.email_invalid_regex
    }
    if (inputAccessedFor === 'signup' && value === '이미 가입된 이메일') {
      return INPUT_ERROR_TYPE.email_duplicated
    }
    if (inputAccessedFor === 'login' && value === '잘못된 이메일') {
      return INPUT_ERROR_TYPE.email_not_match
    }
    return null
  }

  const validatePassword = (value: string): string | null => {
    if (value.length < 8 || value.length > 64) {
      return INPUT_ERROR_TYPE.password_invalid_length
    }

    if (
      inputAccessedFor === 'signup' &&
      !value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
      )
    ) {
      return INPUT_ERROR_TYPE.password_invalid_regex
    }
    if (inputAccessedFor === 'login' && value === '잘못된 비밀번호') {
      return INPUT_ERROR_TYPE.password_not_match
    }
    return null
  }

  const validatePasswordCheck = (
    value: string,
    inputRefValue: string | undefined,
  ): string | null => {
    if (value !== inputRefValue) {
      return INPUT_ERROR_TYPE.password_check_not_matched
    }
    return null
  }

  const validate = (value: string): string | null => {
    switch (inputType) {
      case 'name':
        const nameError = validateNickname(value)
        if (nameError) {
          return nameError
        }
        break
      case 'email':
        const emailError = validateEmail(value)
        if (emailError) {
          return emailError
        }
        break
      case 'password':
        const passwordError = validatePassword(value)
        if (passwordError) {
          return passwordError
        }
        break
      case 'password_check':
        const passwordCheckError = validatePasswordCheck(
          value,
          inputRef?.current?.value,
        )
        if (passwordCheckError) {
          return passwordCheckError
        }
        break
      default:
        return null
    }
    return null
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
            blurEvent()
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
