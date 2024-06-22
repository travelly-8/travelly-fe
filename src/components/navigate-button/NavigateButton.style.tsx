import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Navigate = styled.div<{
  $isActive: boolean | undefined
}>`
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

  animation: ${fadeIn} 0.4s ease-out forwards;
`

export const Icon = styled.img<{
  $isActive: boolean | undefined
}>`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  filter: ${({ $isActive }) =>
    $isActive
      ? 'invert(28%) sepia(89%) saturate(7476%) hue-rotate(241deg) brightness(96%) contrast(95%)'
      : 'none'};
`
