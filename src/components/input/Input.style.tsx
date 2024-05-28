import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'
import { IInput } from './Input.type'

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label<IInput>`
  color: ${({ errorType }) =>
    errorType ? 'var(--color-caution)' : 'var(--color-main)'};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.432rem;
  margin: 0.3rem 0;
`

export const StyledInputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== 'focused' && prop !== 'errorType',
})<IInput>`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 0.4rem;
  border-width: 0.1rem;
  border-style: solid;
  margin-top: 0.1rem;
  padding: 1.1rem 1.6rem;
  border-color: ${({ errorType }) =>
    errorType ? 'var(--color-caution)' : 'var(--color-gray-light)'};
  ${({ focused }) =>
    focused &&
    css<IInput>`
      border-color: ${({ errorType }) =>
        errorType ? 'var(--color-caution)' : 'var(--color-main)'};
    `}
  padding: 1rem 1.25rem;
  cursor: text;
  background-color: var(--color-white);

  &:focus-within {
    border-color: ${({ errorType }) =>
      errorType ? 'var(--color-caution)' : 'var(--color-main)'};
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  gap: 1rem;
  &::placeholder {
    color: var(--color-gray-light);
  }
`

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--color-gray-middle);
  background-color: transparent;
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
  color: var(--color-caution);
`
