export interface IProductDetail {
  id: number
  address: string
  cityCode: string
  detailAddress: string
  homepage: string
  name: string
  description: string
  rating: number
  reviewCount: number
  phoneNumber: string
  ticketDto: Array<{ price: number }>
}

export interface IProductState {
  detail: IProductDetail | null
}
