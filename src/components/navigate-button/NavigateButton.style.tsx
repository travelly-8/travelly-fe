import styled from 'styled-components'

export const Navigate = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4.6rem;
  gap: 0.4rem;
  cursor: pointer;
  span {
    color: ${({ $isActive }) =>
      $isActive ? 'var(--color-main)' : 'var(--color-black)'};
    font-size: 1.2rem;
    line-height: 1.8rem;
    white-space: nowrap;
  }
`

export const Icon = styled.img<{
  $isActive: boolean
}>`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  filter: ${({ $isActive }) =>
    $isActive
      ? 'invert(28%) sepia(89%) saturate(7476%) hue-rotate(241deg) brightness(96%) contrast(95%)'
      : 'none'};
`
