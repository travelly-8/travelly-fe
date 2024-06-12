export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  discount?: number
  price?: number
  buttontype: 'reservation' | 'payment' | 'cancelPayment'
  productId?: string
  onPayConfirmClick?: () => void
}

export interface IButtonType {
  buttontype: 'reservation' | 'payment' | 'cancelPayment'
}
