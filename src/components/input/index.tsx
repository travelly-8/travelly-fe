import { INPUT_LABELS, INPUT_PLACEHOLDER } from '@/constants/INPUT_VALUES'

import { forwardRef, useState } from 'react'

import * as S from './Input.style'

import type { IInput } from './Input.type'

import eyeOffIcon from '/src/assets/common/eye-off.svg'

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      inputType = '',
      onBlur,
      value = '',
      placeholder = '',
      onChange,
      onFocus,
      errorType,
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const isPasswordType =
      inputType === 'password' ||
      inputType === 'passwordCheck' ||
      inputType === 'passwordConfirm' ||
      inputType === 'prevPassword' ||
      inputType === 'newPassword' ||
      inputType === 'newPasswordCheck'

    const INPUT_TYPE_MAP: Record<string, string> = {
      price: 'number',
      contact: 'tel',
      password: 'password',
      passwordCheck: 'password',
      passwordConfirm: 'password',
      prevPassword: 'password',
      newPassword: 'password',
      newPasswordCheck: 'password',
      email: 'email',
      homepageUrl: 'url',
    }

    const inputTagType = INPUT_TYPE_MAP[inputType] || inputType

    return (
      <S.StyledInputContainer>
        <S.StyledLabel htmlFor={inputType} $errorType={errorType}>
          {INPUT_LABELS[inputType]}
        </S.StyledLabel>
        <S.StyledInputWrapper focused={focused} $errorType={errorType}>
          <S.StyledInput
            id={inputType}
            type={
              isPasswordType
                ? showPassword
                  ? 'text'
                  : 'password'
                : inputTagType
            }
            onBlur={() => {
              setFocused(false)
              onBlur && onBlur()
            }}
            onFocus={(e) => {
              setFocused(true)
              onFocus && onFocus(e)
            }}
            ref={ref}
            placeholder={INPUT_PLACEHOLDER[inputType] || placeholder}
            value={value}
            onChange={onChange}
          />
          {inputType === 'price' && <S.CurrencyUnit>원</S.CurrencyUnit>}
          {isPasswordType && (
            <S.ToggleButton type="button" onClick={toggleShowPassword}>
              <img
                src={eyeOffIcon}
                alt={showPassword ? 'Hide password' : 'Show password'}
              />
            </S.ToggleButton>
          )}
        </S.StyledInputWrapper>
        {errorType && <S.StyledError>*{errorType}</S.StyledError>}
      </S.StyledInputContainer>
    )
  },
)

Input.displayName = 'Input'

export default Input
