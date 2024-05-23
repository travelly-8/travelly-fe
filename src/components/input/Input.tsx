import { useState } from 'react'
import * as S from './Input.style'
import { InputProps } from './Input.type'
import { INPUT_ERROR_TYPE, INPUT_LABELS, INPUT_PLACEHOLDER } from './constant'

const Input: React.FunctionComponent<InputProps> = ({
  inputType = 'default',
  inputRef,
  errorType = null,
  blurEvent = () => console.log('blurred'),
  value = '',
  placeholder = '',
  onChange,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <S.StyledInputContainer>
      <S.StyledLabel htmlFor={inputType}>
        {INPUT_LABELS[inputType]}
      </S.StyledLabel>
      <S.StyledInputWrapper focused={focused}>
        <S.StyledInput
          id={inputType}
          type={inputType}
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
      </S.StyledInputWrapper>
      {errorType && (
        <S.StyledError>{INPUT_ERROR_TYPE[errorType]}</S.StyledError>
      )}
    </S.StyledInputContainer>
  )
}

export default Input
