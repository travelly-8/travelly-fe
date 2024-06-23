export interface IReservationData {
  data: IReservationResponse[]
}

export interface IReservationDetailData {
  data: IReservationResponse
}

export interface IReservationErrorData {
  code: string
  message: string
}

export interface IReservationResponse {
  id: number
  productId: number
  productName: string
  productImages: IProductImage[]
  buyerName: string
  phone: string
  email: string
  date: string
  totalPrice: number
  status: ReservationStatusType
  rejectReason: string
  tickets: ITicket[]
}

interface IProductImage {
  url: string
  order: number
}

interface ITicket {
  id: number
  name: string
  quantity: number
  price: number
}

type ReservationStatusType =
  | 'PENDING'
  | 'REJECTED'
  | 'ACCEPTED'
  | 'CANCELED'
  | 'EXPIRED'
