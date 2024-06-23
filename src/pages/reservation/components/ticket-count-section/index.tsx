import { useEffect, useState } from 'react'

import { personnel } from '@/store/personnel-slice/personnel-slice'

import { useDispatch } from 'react-redux'

import ReserveTicket from './ReserveTicket'
import * as S from './TicketCountSection.style'

import type {
  IReservedTickets,
  ITicketCounts,
  ITicketDto,
} from './TicketCountSection.type'

function TicketCountSection({
  isInput = true,
  ticketDto,
  reservedTickets,
}: {
  isInput: boolean
  ticketDto?: ITicketDto[]
  reservedTickets?: IReservedTickets[]
}) {
  const dispatch = useDispatch()

  const initialCounts: ITicketCounts =
    ticketDto?.reduce((acc, ticketType) => {
      acc[ticketType.name] = 0
      return acc
    }, {} as ITicketCounts) || {}

  const [ticketCounts, setTicketCounts] = useState<ITicketCounts>(initialCounts)

  const handleIncrease = (ticketType: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: (prevCounts[ticketType] || 0) + 1,
    }))
  }

  const handleDecrease = (ticketType: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: Math.max((prevCounts[ticketType] || 0) - 1, 0),
    }))
  }

  useEffect(() => {
    dispatch(personnel(ticketCounts))
  }, [ticketCounts])

  return (
    <S.SectionWrapper>
      <S.Title>인원</S.Title>
      <S.TicketCountWrapper>
        <ReserveTicket
          ticketDto={ticketDto}
          ticketCounts={ticketCounts}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </S.TicketCountWrapper>
    </S.SectionWrapper>
  )
}

export default TicketCountSection
