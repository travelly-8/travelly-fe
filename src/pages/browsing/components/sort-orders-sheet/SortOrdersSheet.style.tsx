import styled from 'styled-components'

export const SheetBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.5;
  z-index: 999;
`

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding: 0.8rem 2rem 2.4rem;
  border-radius: 1rem 1rem 0 0;
  background-color: var(--color-white);
  z-index: 1000;
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
