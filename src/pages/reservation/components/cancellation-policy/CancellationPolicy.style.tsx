import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 6.5rem;
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

/////////ddd

export const StyledCheckbox = styled.input`
  display: none;

  & + label {
    display: flex;
    align-items: center;
    position: relative;
    gap: 0.8rem;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    border: 0.1rem solid var(--color-main);
    border-radius: 0.2rem;
  }

  &:hover + label:before {
    border: 0.1rem solid var(--color-main);
    border-radius: 0.2rem;
  }

  &:checked + label:before {
    background: var(--color-main);
    border-radius: 0.2rem;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    border: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 0.2rem;
    top: 0.6rem;
    background: var(--color-white);
    width: 0.2rem;
    height: 0.2rem;
    box-shadow:
      0.2rem 0 0 var(--color-white),
      0.4rem 0 0 var(--color-white),
      0.4rem -0.2rem 0 var(--color-white),
      0.4rem -0.4rem 0 var(--color-white),
      0.4rem -0.6rem 0 var(--color-white),
      0.4rem -0.8rem 0 var(--color-white);
    transform: rotate(45deg);
  }
`
