import styled from 'styled-components'

interface IPointInputProps {
  'data-visible': boolean
}

export const PageContainer = styled.div`
  position: relative;
  padding: 0 2rem 0;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const BackBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const HeaderTitle = styled.span`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.06rem;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  padding: 1.2rem 0;
  border-bottom: 0.1rem solid var(--color-gray-light);
  color: var(--color-black);
`

export const InputCheckBox = styled.input`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export const GetAccount = styled.p`
  font-size: 1.2rem;
  line-height: 18px;
`

export const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.6rem 0 2rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
`

export const PayOptions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem 0 1.2rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
`

export const PayOptionHeader = styled.h3`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`

export const PayOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.6rem;
  height: 1.6rem;
  border: 0.2rem solid var(--color-main);
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--color-main);
    border: 0.3rem solid var(--color-white);
    box-shadow: 0 0 0 0.2rem var(--color-main);
  }
`

export const PointInput = styled.input.attrs<IPointInputProps>(
  ({ 'data-visible': visible }) => ({
    'data-visible': visible,
  }),
)<IPointInputProps>`
  display: ${({ 'data-visible': visible }) => (visible ? 'block' : 'none')};
  height: 4rem;
  padding: 1.1rem 1.6rem;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-gray-light);
  outline: none;

  &::placeholder {
    color: var(--color-gray-light);
  }

  &:focus {
    border-color: var(--color-main);
    outline: none;
  }
`

export const PayAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0 2.4rem;
`

export const AllPayTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const AllPayText = styled.p`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`

export const Vat = styled.span`
  color: var(--color-gray-semi);
  font-size: 1rem;

  &::after {
    content: '*';
    color: var(--color-main);
  }
`

export const AllAmount = styled.span`
  color: var(--color-black);
  font-size: 1.3rem;
  font-weight: 600;
`
export const Wrapper = styled.div``

export const Error = styled.span`
  color: var(--color-caution);
  font-size: 1.2rem;
  line-height: normal;
`
