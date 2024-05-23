import { ReactNode } from 'react'

export type ButtonType = 'default' | 'selected' | 'unselected'

export interface IIconButton {
  imgSrc: string
  children: ReactNode
  onClick?: () => void
  buttonType: ButtonType
}
