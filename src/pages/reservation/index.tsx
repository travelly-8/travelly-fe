import styled from 'styled-components'

import ReservationInput from './components/reservation-input'

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  height: 100%;
`

function Reservation() {
  return (
    <PageContainer>
      <ReservationInput />
    </PageContainer>
  )
}

export default Reservation
