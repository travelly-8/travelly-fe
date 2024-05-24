export type ColorType = 'primary' | 'disabled'

export type SizeType = 'large' | 'medium' | 'small'

export interface IRectangleButton {
  type?: string
  size?: SizeType
  color?: ColorType
  disabled?: boolean
  className?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
