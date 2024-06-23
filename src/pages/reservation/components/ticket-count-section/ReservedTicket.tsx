import * as S from './TicketCountSection.style'

import type { IReservedTicketsProps } from './TicketCountSection.type'

const ReservedTicket = ({ reservedTickets }: IReservedTicketsProps) => {
  return reservedTickets?.map((ticketType) => (
    <S.Ticket key={ticketType.id}>
      <S.TicketType>{ticketType.name}</S.TicketType>
      <S.TicketCount>
        <S.Count>{ticketType.quantity ?? 0}명</S.Count>
      </S.TicketCount>
    </S.Ticket>
  ))
}

export default ReservedTicket
