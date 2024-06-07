import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
`

export const Title = styled.div`
  color: #000;
  font-size: 1.4rem;
  line-height: 2.38rem;
  padding-top: 1.6rem;
  padding-left: 2rem;
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
