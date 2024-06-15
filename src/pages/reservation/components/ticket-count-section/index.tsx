import { useEffect, useState } from 'react'

import { personnel } from '@/store/personnel-slice/personnel-slice'

import { useDispatch } from 'react-redux'

import * as S from './TicketCountSection.style'

interface ITicketCounts {
  [key: string]: number
}

interface ITicketDto {
  id: number
  name: string
  price: number
  description: string
}

function TicketCountSection({
  isInput = true,
  ticketDto,
}: {
  isInput: boolean
  ticketDto: ITicketDto[]
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
        {ticketDto?.map((ticketType) => (
          <S.Ticket key={ticketType.id}>
            <S.TicketType>{ticketType.name}</S.TicketType>
            <S.TicketCount>
              {isInput ? (
                <>
                  <S.MinusButton
                    onClick={() => handleDecrease(ticketType.name)}
                  />
                  <S.Count>{ticketCounts[ticketType.name] ?? 0}개</S.Count>
                  <S.PlusButton
                    onClick={() => handleIncrease(ticketType.name)}
                  />
                </>
              ) : (
                <S.Count>{ticketCounts[ticketType.name] ?? 0}개</S.Count>
              )}
            </S.TicketCount>
          </S.Ticket>
        ))}
      </S.TicketCountWrapper>
    </S.SectionWrapper>
  )
}

export default TicketCountSection
