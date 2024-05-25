import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Icon = styled.img`
  width: 7.6rem;
  height: 7.6rem;
  margin-bottom: 4.3rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 5.6rem;
  cursor: default;
`

export const UpperText = styled.h1`
  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
`
export const LowerText = styled.h2`
  color: var(--color-black);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
`
