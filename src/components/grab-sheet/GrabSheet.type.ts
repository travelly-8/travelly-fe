import { ReactNode } from 'react'

export interface ISheetProps {
  name: string
  children: ReactNode
  onClose?: () => void
  align?: string
}
