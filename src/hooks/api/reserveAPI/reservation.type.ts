import { IOperationDays } from '@components/calendar-input/CalendarInput.type'

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

// (판매자) 예약 관리
export interface IReservationManageData {
  data: IReservationManageResponse[]
}

export interface IReservationManageResponse {
  productId: number
  productName: string
  price: number
  date: string
  reservationCount: number
  pendingReservationCount: number
  productImages: IImage[]
}

// (판매자) 예약 관리 상세
export interface IManageDetailData {
  data: IManageDetailResponse
}

export interface IManageDetailResponse {
  productId: number
  productName: string
  productImages: IImage[]
  productPrice: number
  operationDays: IOperationDays[]
  reservations: IReservation[]
  buyerName: string
  date: string
  email: string
  phone: string
}

export interface IReservation {
  id: number
  productId: number
  productName: string
  productImages: IImage[]
  buyerName: string
  phone: string
  email: string
  date: string
  tickets: ITicket[]
  totalPrice: number
  status: ReservationStatusType
  rejectReason: string
}
