import React from 'react'
import * as S from './Button.style'
import { Props } from './Button.type'

const RectangleButton: React.FC<Props> = ({
  type = 'button',
  size = 'medium',
  color = 'primary',
  className = '',
  disabled = false,
  onKeyDown,
  onClick,
  children,
}: Props) => {
  return (
    <S.Button
      type={type === 'button' ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={className}
      color={color}
      size={size}
    >
      {children}
    </S.Button>
  )
}

export default RectangleButton
