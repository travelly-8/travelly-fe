export interface IButtonType {
  buttontype: 'reservation' | 'payment' | 'cancelPayment'
}

export interface IFooter extends IButtonType {
  isBookmarked: boolean
  isReservationProduct: boolean
  price?: number
  productId?: string
  cancelPolicyChecked?: boolean
  onPayConfirmClick?: () => void
  onPayCancelClick?: () => void
  onSubmit?: () => void
}
