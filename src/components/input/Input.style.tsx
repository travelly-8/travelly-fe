import styled, { css } from 'styled-components'
import { IInput } from './Input.type'

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label<IInput>`
  color: ${({ errorType }) => (errorType ? '#ff0000' : '#5849ff')};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.432rem;
  margin: 0.3rem 0;
`

export const StyledInputWrapper = styled.div<IInput>`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 0.4rem;
  border-width: 0.1rem;
  border-style: solid;
  margin-top: 0.1rem;
  padding: 1.1rem 1.6rem;
  border-color: ${({ errorType }) => (errorType ? '#ff0000' : '#dfdfdf')};
  ${({ focused }) =>
    focused &&
    css<IInput>`
      border-color: ${({ errorType }) => (errorType ? '#ff0000' : '#5849ff')};
    `}
  padding: 1rem 1.25rem;
  ${({ inputType }) =>
    inputType !== 'date' &&
    css`
      cursor: text;
    `}
  background-color: white;

  &:focus-within {
    border-color: ${({ errorType }) => (errorType ? '#ff0000' : '#5849ff')};
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
export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  color: #787878;
  img {
    width: 1.6rem;
    height: 1.382rem;
  }
`

export const StyledError = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.432rem;
  margin: 0.3rem 0;
  color: #ff0000;
`