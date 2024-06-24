import { IProductDetail } from '@/store/product-slice/product-slice.type'

export interface IButtonType {
  buttontype: 'reservation' | 'payment' | 'cancelPayment'
}

export interface IFooter extends IButtonType {
  productDetail?: IProductDetail
  isBookmarked: boolean
  isReservationProduct: boolean
  price?: number
  productId?: string
  cancelPolicyChecked?: boolean
  personnelInfoChecked?: boolean
  reasonableDate?: boolean
  calendarChecked?: boolean
  onPayConfirmClick?: () => void
  onPayCancelClick?: () => void
  onSubmit?: () => void
}
