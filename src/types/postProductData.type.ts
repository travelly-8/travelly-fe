export interface IPutProductDetail {
  productId: number
  data: IPostProduct
}

export interface IPostProduct {
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
  operationDays: IOperationDays[]
}
interface ITicketPrice {
  [ticketName: string]: number
}

interface IOperationDays {
  date: string
  operationDayHours: IOperationDayHours[]
}
interface IOperationDayHours {
  startTime: string
  endTime: string
}
