import minus from '@/assets/reservation/minus.svg'
import plus from '@/assets/reservation/plus.svg'

import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.6rem;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-main);
`

export const TicketCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

export const Ticket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TicketType = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  line-height: 23.8px;
`

export const TicketCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const Count = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 23.8px;
`

export const MinusButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${minus});
`

export const PlusButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${plus});
`
