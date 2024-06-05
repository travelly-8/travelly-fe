import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`

export const ProductList = styled.div`
  position: relative;
  display: flex;
  gap: 1.6rem;
  padding: 0 2rem;
  overflow-x: hidden;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`
