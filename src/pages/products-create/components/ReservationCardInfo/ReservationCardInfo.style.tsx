import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.6rem;
  width: 32rem;
`

export const InfoName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
  padding-bottom: 0.5rem;
`

export const InfoLabel = styled.span`
  font-size: 1.4rem;
`

export const InfoValue = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

export const InfoDate = styled.span`
  font-size: 1.4rem;
  color: var(--color-gray-dark);
`

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 1.4rem;
`

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
