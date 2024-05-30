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
      inputType === 'password' || inputType === 'passwordCheck'

    return (
      <S.StyledInputContainer>
        <S.StyledLabel htmlFor={inputType} errorType={errorType}>
          {INPUT_LABELS[inputType]}
        </S.StyledLabel>
        <S.StyledInputWrapper focused={focused} errorType={errorType}>
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
            ref={ref}
            placeholder={INPUT_PLACEHOLDER[inputType] || placeholder}
            value={value}
            onChange={onChange}
          />
          {isPasswordType && (
            <S.ToggleButton onClick={toggleShowPassword}>
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
