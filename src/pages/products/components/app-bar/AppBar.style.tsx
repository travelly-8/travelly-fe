import styled from 'styled-components'

export const AppBarWrapper = styled.div`
  padding: 1.2rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray-bright);
`

export const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const ProductType = styled.h2`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.06rem;
`

export const ProductCount = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.4rem;
  line-height: 2.38rem;
`

export const OrderFilterWrapper = styled.div`
  display: flex;
  gap: 2.8rem;
`

export const Order = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
  cursor: pointer;
  gap: 0.5rem;
`

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-gray-light);
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`
