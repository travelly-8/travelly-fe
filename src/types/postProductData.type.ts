import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS } from 'react-dom/client'

export interface IPutProductDetail {
  productId: number
  data: IPostProduct
}

export interface IImages {
  url: string
  order: DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS
}
export interface IPostProduct {
  name: string
  companyName: string
  type: string
  description: string
  images: IImages[]
  address: string
  detailAddress: string
  phoneNumber: string
  homepage: string
  cityCode: string
  quantity: number
  tickets: ITicketPrice[]
  operationDays: IOperationDays[]
}
interface ITicketPrice {
  name: string
  price: number
}

export interface IOperationDays {
  date: string
  operationDayHours: IOperationDayHours[]
}
export interface IOperationDayHours {
  startTime: string
  endTime: string
}

export interface IGetProductsData {
  page: number
  size: number
  sort?: string | undefined
  keyword?: string | undefined
  cityCode?: string | undefined
  contentType?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  minPrice?: number | undefined
  maxPrice?: number | undefined
}
