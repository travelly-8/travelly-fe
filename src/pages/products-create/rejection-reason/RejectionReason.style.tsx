import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 2rem;
`
export const InfoWrapper = styled.div`
  margin: 2rem 0;
  box-shadow: 0 0.3rem 0.2rem var(--color-gray-light);
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
`

export const Text = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

export const Textarea = styled.textarea`
  width: 32rem;
  height: 14rem;
  outline: none;
  border: 0.1rem solid var(--color-gray-light);
  border-radius: 0.5rem;
  padding: 1rem;
  resize: none;
  &::placeholder {
    color: var(--color-gray-middle);
    font-size: 1rem;
    vertical-align: top;
  }
`
