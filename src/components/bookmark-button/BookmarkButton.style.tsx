import styled from 'styled-components'

interface IButtonProps {
  $position: 'absolute' | 'static'
}

export const ButtonWrapper = styled.div``

export const Button = styled.img<IButtonProps>`
  position: ${({ $position }) =>
    $position === 'static' ? 'static' : 'absolute'};
  top: 0.5rem;
  right: 0.5rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`
