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

export interface IReserveTicketProps {
  ticketDto: ITicketDto[] | undefined
  ticketCounts: ITicketCounts
  handleIncrease: (ticketType: string) => void
  handleDecrease: (ticketType: string) => void
}

export interface ITicketCountSection {
  isInput: boolean
  ticketDto?: ITicketDto[]
  reservedTickets?: IReservedTickets[]
}

export interface IReservedTicketsProps {
  reservedTickets: IReservedTickets[] | undefined
}
