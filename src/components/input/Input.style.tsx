import styled, { css } from 'styled-components'
import { InputProps } from './Input.type'

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  color: #5849ff;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.432rem;
  margin: 0.1rem 0;
`

export const StyledInputWrapper = styled.div<InputProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 0.4rem;
  border-width: 0.1rem;
  border-style: solid;
  margin-top: 0.1rem;
  margin-bottom: 1.5rem;
  padding: 11px 16px;
  ${({ focused }) =>
    focused
      ? css`
          border-color: #5849ff;
        `
      : css`
          border-color: #dfdfdf;
        `}
  padding: 1rem 1.25rem;
  ${({ inputType }) =>
    inputType !== 'date' &&
    css`
      cursor: text;
    `}
  background-color: white;

  &:focus-within {
    border-color: #5849ff;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  gap: 1rem;
  &::placeholder {
    color: #dfdfdf;
  }
`

export const StyledError = styled.p`
  margin-left: 0.5rem;
  color: #ef4444;
`
