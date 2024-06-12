export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  discount?: number
  price?: number
  buttonType: 'reservation' | 'payment' | 'cancelPayment'
  productId?: string
  onPayConfirmClick?: () => void
}

export interface IButtonType {
  buttonType: 'reservation' | 'payment' | 'cancelPayment'
}
