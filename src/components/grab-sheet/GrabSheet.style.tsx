import styled from 'styled-components'

export const SheetBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.5;
  z-index: 999;
  cursor: pointer;
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
