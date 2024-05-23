import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 -2rem;
  height: 100vh;
  background: linear-gradient(162deg, #5e44ff 0%, #76bddb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const TextWrapper = styled.div`
  animation: ${fadeIn} 300ms ease-in-out;
  opacity: 0;
  animation-fill-mode: forwards;
  cursor: default;
`

export const UpperText = styled.p`
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 400;
`

export const LowerText = styled.p`
  color: var(--color-white);
  text-shadow: 0px 0px 6px rgba(21, 0, 255, 0.6);
  font-size: 3.5rem;
  font-weight: 700;
`
