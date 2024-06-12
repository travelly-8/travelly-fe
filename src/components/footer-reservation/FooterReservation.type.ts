export interface IButtonType {
  buttontype: 'reservation' | 'payment' | 'cancelPayment'
}
export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  discount?: number
  price?: number
  productId?: string
  onPayConfirmClick?: () => void
}
