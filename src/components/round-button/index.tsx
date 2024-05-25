import * as S from './RoundButton.style.tsx'

import type { IRoundButton } from '@components/round-button/RoundButton.type.ts'

const RoundButton = ({
  className = '',
  disabled = false,
  onKeyDown,
  onClick,
  children,
}: IRoundButton) => {
  return (
    <S.BasicButton
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
    >
      {children}
    </S.BasicButton>
  )
}

const PrimaryRoundButton = ({
  size = 'medium',
  className = '',
  disabled = false,
  onKeyDown,
  onClick,
  children,
}: IRoundButton) => {
  return (
    <S.PrimaryButton
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      $size={size}
    >
      {children}
    </S.PrimaryButton>
  )
}

const GrayRoundButton = ({
  size = 'medium',
  className = '',
  disabled = false,
  onKeyDown,
  onClick,
  children,
  selected = false,
}: IRoundButton) => {
  return (
    <S.GrayButton
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      $size={size}
      $selected={selected}
    >
      {children}
    </S.GrayButton>
  )
}

RoundButton.Primary = PrimaryRoundButton
RoundButton.Gray = GrayRoundButton

export default RoundButton
