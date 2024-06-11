export interface IReservationInputProps {
  disabled?: boolean
  // 나중에 regiseter를 props로 받아서 사용할 수 있음 + defaultValues도
}

export interface IReservationInputState {
  name: string
  phone: string
  email: string
}
