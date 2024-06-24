export interface IReservationCardProps {
  id?: number
  productId?: number
  buyerName: string
  date: string
  email: string
  phone: string
}
export interface IManageCardProps {
  reservation: IReservationCardProps
}
