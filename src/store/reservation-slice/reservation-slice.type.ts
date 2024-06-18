export interface IReservationSliceState {
  reservation: {
    value: {
      productId: number
      name: string
      phone: string | undefined
      email: string
      ticketDtos: IPostTicketDto[]
      date: string
    }
  }
}
interface IPostTicketDto {
  ticketId: number
  quantity: number
}
