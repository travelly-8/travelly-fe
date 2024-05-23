import React from 'react'
import { StyledButton } from './Button.style'
import { Props } from './Button.type'

const Button: React.FC<Props> = ({
  type = 'button',
  size = 'medium',
  color = 'primary',
  className = '',
  onKeyDown,
  onClick,
  children,
}: Props) => {
  return (
    <StyledButton
      type={type === 'button' ? 'button' : 'submit'}
      disabled={color === 'gray'}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={className}
      color={color}
      size={size}
    >
      {children}
    </StyledButton>
  )
}

export default Button
