import styled from 'styled-components'

export const PageContainer = styled.main<{
  $isHamburgerClicked: boolean
  $isSheet: boolean
}>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  display: ${({ $isSheet }) => ($isSheet ? 'none' : 'block')};

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 3.2rem;
  padding-top: 2.4rem;
`

export const AllProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  padding: 0 2rem 2rem 2rem;
`

export const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0 2rem;
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

export const SectionContentsWrapper = styled.div`
  display: flex;
  width: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  position: relative;
  display: flex;
  gap: 1.6rem;
  padding: 0 2rem;
  overflow-x: hidden;
  cursor: pointer;
`

export const AllCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.4rem;
  column-gap: 1.6rem;
  width: 100%;
`
