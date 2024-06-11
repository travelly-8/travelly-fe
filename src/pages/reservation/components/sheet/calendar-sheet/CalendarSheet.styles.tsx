import { styled } from 'styled-components'

export const Buttons = styled.div`
  width: 100%;
  float: right;

  display: flex;
  justify-content: right;
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
