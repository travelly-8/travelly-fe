import React from 'react'

import * as S from './RectangleButton.style'

import type { IRectangleButton } from './RectangleButton.type'

const RectangleButton: React.FC<IRectangleButton> = ({
  type = 'button',
  size = 'medium',
  color = 'primary',
  className = '',
  disabled = false,
  onKeyDown,
  onClick,
  children,
}: IRectangleButton) => {
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
