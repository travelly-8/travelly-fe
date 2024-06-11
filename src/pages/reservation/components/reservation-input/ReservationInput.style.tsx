import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  padding-top: 1.2rem;
`
export const Input = styled.input`
  display: inline-flex;
  height: 4rem;
  padding: 1.1rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-gray-light);
  background: var(--color-white);
  &::placeholder {
    color: var(--color-gray-light);
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:disabled {
    background: var(--color-gray-bright_bg);
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const Label = styled.label`
  color: var(--color-main);
  font-size: 1.2rem;
  line-height: normal;
`
export const Error = styled.span`
  color: var(--color-caution);
  font-size: 1.2rem;
  line-height: normal;
`
