import styled from 'styled-components'

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 2rem;
`
export const InputWrapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
`
export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const ErrorMessage = styled.p`
  color: var(--color-red);
  font-size: 1.4rem;
  margin: 1rem 2rem;
  text-align: center;
`
