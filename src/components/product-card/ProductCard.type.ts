export interface IProductCardProps {
  cardData: IProductCardData
  size: 'sm' | 'bg' | 'summary'
}

export interface IProductCardData {
  id: number
  imageUrl: string
  name: string
  cityCode: string
  address: string
  discount?: number
  ticketDto: ITicketDto[]
  rating: number
  reviewCount: number
}

interface ITicketDto {
  name: string
  price: number
  description: string
}
