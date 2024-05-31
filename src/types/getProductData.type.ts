export interface IGetProductResponse {
  data: IGetProductData
}
export interface IGetProductData {
  content: IProduct[]
}
export interface IProduct {
  id: number
  name: string
  type: string
  description: string
  imageUrl: string
  address: string
  detailAddress: string
  phoneNumber: string
  homepage: string
  cityCode: string
  quantity: number
  ticketPrice: ITicketPrice
  rating: number
  operationDays: IOperationDays[]
  reviewCount: number
  createdDate: string
  modifiedDate: string
}

interface ITicketPrice {
  [ticketName: string]: string
}

interface IOperationDays {
  date: string
  operationDayHours: IOperationDayHours[]
}
interface IOperationDayHours {
  startTime: string
  endTime: string
}
