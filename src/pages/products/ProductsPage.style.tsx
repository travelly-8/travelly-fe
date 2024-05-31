import styled from 'styled-components'

export const PageContainer = styled.div<{ $isSearchSheet: boolean }>`
  display: ${({ $isSearchSheet }) => ($isSearchSheet ? 'none' : 'block')};
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const AppBarWrapper = styled.div`
  padding: 1.2rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
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
  align-items: center;
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    width: 0.7rem;
    height: 0.5rem;
    margin-left: 0.8rem;
    background-image: url('/src/assets/products/down-arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
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

export const AllProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.4rem;
  padding: 0 2rem 2rem 2rem;
`

export const AllCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.4rem;
  column-gap: 1.6rem;
  width: 100%;
`
