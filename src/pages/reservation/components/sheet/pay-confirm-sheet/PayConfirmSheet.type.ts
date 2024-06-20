export interface IReservationData {
  name: string
  phone: string
  email: string
  ticketDtos: ITicketDto[]
  date: string
}

interface ITicketDto {
  ticketId: number
  quantity: number
}
