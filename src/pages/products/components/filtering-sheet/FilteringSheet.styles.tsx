import { styled } from 'styled-components'

export const HeaderTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`

export const Content = styled.div`
  padding: 0 2rem;
`

export const LocaleList = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 1rem;
`

export const Buttons = styled.div`
  width: 60%;
  margin-top: 1rem;
  float: right;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  white-space: nowrap;
`

export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

export const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: var(--color-black);
  font-size: 1.4rem;
`
