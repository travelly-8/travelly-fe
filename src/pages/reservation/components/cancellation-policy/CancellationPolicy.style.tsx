import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PolicyHeader = styled.h3`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`

export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.2rem;
  color: var(--color-gray-semi);
  font-size: 1rem;
  line-height: 1.8rem;
`

export const FirstPolicy = styled.p`
  &::after {
    content: '*';
    color: var(--color-main);
  }
`

export const SecondPolicy = styled.p``

export const CheckConsent = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const CheckBox = styled.input``

export const ConsentContent = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
