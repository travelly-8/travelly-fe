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
export const Example = styled.div<{ $color: string }>`
  border-radius: 0.7rem;
  width: 4.334rem;
  height: 3.1rem;
  background-color: ${({ $color }) => $color};
`
export const ExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: var(--color-black);
  text-align: center;
  font-size: 0.9rem;
  line-height: 3.06rem;
  font-weight: 700;
`
