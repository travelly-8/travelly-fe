export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  discount?: number
  price?: number
  url?: string
}

export interface IButtonType {
  buttonType: 'reservation' | 'payment' | 'cancelPayment'
}
