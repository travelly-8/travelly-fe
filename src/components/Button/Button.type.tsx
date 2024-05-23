export type Color = 'primary' | 'gray'

export type Size = 'full' | 'large' | 'medium' | 'small'

export type Props = {
  type?: string
  size: Size
  color: Color
  disabled?: boolean
  className?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
