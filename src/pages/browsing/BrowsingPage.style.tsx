import styled from 'styled-components'

export const PageContainer = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentsWrapper = styled.div`
  padding: 2.4rem 2rem 2rem;
`

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3.2rem;

  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const AllProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`

export const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const SectionTitleIcon = styled.img`
  width: 2rem;
  height: 2rem;
`

export const SectionTitle = styled.h2`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.06rem;
`

export const ALLTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ShowAllProducts = styled.p`
  color: var(--color-gray-middle);
  font-size: 1.4rem;
  line-height: 2.38rem;
  cursor: pointer;

  &::after {
    content: '>';
    margin-left: 0.2rem;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`

export const AllCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.4rem;
  column-gap: 1.6rem;
`
