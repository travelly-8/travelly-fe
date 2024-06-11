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

/////////ddd

export const StyledCheckbox = styled.input`
  display: none;

  & + label {
    position: relative;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
  }

  &:hover + label:before {
    background: var(--color-main);
  }

  &:checked + label:before {
    background: var(--color-main);
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow:
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
`
