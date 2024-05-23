import React from 'react'
import * as S from './Button.style'
import { Props } from './Button.type'

const Button: React.FC<Props> = ({
  type = 'button',
  size = 'medium',
  color = 'primary',
  className = '',
  disabled = false, // 별도의 boolean 값으로 변경
  onKeyDown,
  onClick,
  children,
}: Props) => {
  return (
    <S.Button
      type={type === 'button' ? 'button' : 'submit'}
      disabled={disabled} // 별도의 boolean 값 사용
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

export default Button
