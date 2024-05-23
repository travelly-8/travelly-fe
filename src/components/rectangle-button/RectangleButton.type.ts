export type ColorType = 'primary' | 'gray'

export type SizeType = 'full' | 'large' | 'medium' | 'small'

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
