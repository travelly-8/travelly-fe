export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  discount?: number
  price?: number
  url?: string
  productId: string | undefined
}

export interface IButtonType {
  buttonType: 'reservation' | 'payment' | 'cancelPayment'
}
