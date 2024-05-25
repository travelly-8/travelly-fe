import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 0.8rem 2rem 2.4rem;
  border-radius: 1rem 1rem 0 0;
`

export const GrabHandle = styled.div`
  width: 2.7rem;
  height: 0.3rem;
  border-radius: 3rem;
  background-color: var(--color-gray-light);
`

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

export const Order = styled.p`
  padding-left: 0.3rem;
  color: var(--color-black);
  font-size: 1.4rem;
  line-height: 2.38rem;
  cursor: pointer;
`

export const Divider = styled.div`
  border-bottom: 1px solid var(--color-gray-bright);
`
