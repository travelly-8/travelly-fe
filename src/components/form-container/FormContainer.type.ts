export interface IFormContainerProps {
  isKeyboardOpen: boolean
  title: string
  onSubmit: () => void
  allInputsFilled: boolean
  children: ReactNode
  buttonText: string
}
