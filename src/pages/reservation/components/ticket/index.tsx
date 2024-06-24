import { IReservation } from '@/hooks/api/reserveAPI/reservation.type'

import * as S from './Ticket.style'

const Ticket = ({ data }: { data: IReservation }) => {
  console.log(data)
  return (
    <S.Wrapper>
      <p>{data.buyerName}</p>
      <p>{data.date}</p>
    </S.Wrapper>
  )
}

export default Ticket
