import { IProducts } from '@/types/getMemberData.type'

export interface IProductCardProps {
  cardData: IProducts & IProductCardData
  size: 'sm' | 'bg' | 'summary'
  bookmark?: boolean
}

export interface IProductImages {
  url: string
  order: number
}

export interface IProductCardData {
  id: number
  images: IProductImages[]
  name: string
  cityCode: string
  address: string
  ticketDto: ITicketDto[]
  rating: number
  reviewCount: number
}

interface ITicketDto {
  name: string
  price: number
  description: string
}
