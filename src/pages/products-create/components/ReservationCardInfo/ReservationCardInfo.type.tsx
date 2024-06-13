import styled from 'styled-components'

export const InfoName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
  padding-bottom: 0.5rem;
  width: 32rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
`

export const InfoLabel = styled.span`
  margin-right: 0.8rem;
  font-size: 1.4rem;
`

export const InfoValue = styled.span`
  margin-right: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
`

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 1.4rem;
  padding: 0 1.6rem;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`
