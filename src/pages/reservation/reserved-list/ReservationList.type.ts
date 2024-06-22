export interface IReservationListData {
  id: number
  name: string
  createdDate: string
  images: IImage[]
}

interface IImage {
  url: string
  order: number
}
