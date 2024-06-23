export interface ITicketCounts {
  [key: string]: number
}

export interface ITicketDto {
  id: number
  name: string
  price: number
  description: string
}

export interface IReservedTickets {
  id: number
  name: string
  price: number
  quantity: number
}
