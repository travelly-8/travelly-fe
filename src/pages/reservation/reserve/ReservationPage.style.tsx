import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  padding: 0 2rem;

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
