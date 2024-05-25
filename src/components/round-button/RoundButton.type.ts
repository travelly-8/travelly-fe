export type SizeType = 'full' | 'large' | 'medium' | 'small'

export interface IRoundButton {
  type?: string
  size?: SizeType
  disabled?: boolean
  className?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  selected?: boolean
}
