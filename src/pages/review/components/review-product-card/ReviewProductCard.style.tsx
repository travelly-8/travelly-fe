import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 0.1rem solid var(--color-gray-light);
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
`

export const Img = styled.img`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 0.8rem;
  object-fit: cover;
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const ProductName = styled.p`
  color: var(--color-black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.38rem; /* 170% */
`

export const PriceAndDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`
export const Price = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; /* 150% */
`

export const Bar = styled.p`
  color: var(--color-gray-light);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
`
export const Date = styled.p`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; /* 150% */
`

export const Arrow = styled.img`
  width: 0.6rem;
  height: 1.2rem;
  cursor: pointer;
`
