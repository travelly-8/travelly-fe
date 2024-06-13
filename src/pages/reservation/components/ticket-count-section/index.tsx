import { useState } from 'react'

import * as S from './TicketCountSection.style'

const mockTicket = ['성인', '청소년', '소아']

interface ITicketCounts {
  [key: string]: number
}

function TicketCountSection({ isInput = true }: { isInput: boolean }) {
  const initialCounts: ITicketCounts = mockTicket.reduce((acc, ticketType) => {
    acc[ticketType] = 0
    return acc
  }, {} as ITicketCounts)

  const [ticketCounts, setTicketCounts] = useState<ITicketCounts>(initialCounts)

  const handleIncrease = (ticketType: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: prevCounts[ticketType] + 1,
    }))
  }

  const handleDecrease = (ticketType: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: Math.max(prevCounts[ticketType] - 1, 0),
    }))
  }

  return (
    <S.SectionWrapper>
      <S.Title>인원</S.Title>
      <S.TicketCountWrapper>
        {mockTicket.map((ticketType) => (
          <S.Ticket key={ticketType}>
            <S.TicketType>{ticketType}</S.TicketType>
            <S.TicketCount>
              {isInput ? (
                <>
                  <S.MinusButton onClick={() => handleDecrease(ticketType)} />
                  <S.Count>{ticketCounts[ticketType]}개</S.Count>
                  <S.PlusButton onClick={() => handleIncrease(ticketType)} />
                </>
              ) : (
                <S.Count>{ticketCounts[ticketType]}개</S.Count>
              )}
            </S.TicketCount>
          </S.Ticket>
        ))}
      </S.TicketCountWrapper>
    </S.SectionWrapper>
  )
}

export default TicketCountSection
