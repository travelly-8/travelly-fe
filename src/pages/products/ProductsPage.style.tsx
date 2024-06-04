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

export const AllProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.4rem;
  padding: 0 2rem 2rem 2rem;
`

export const AllCardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.4rem;
  column-gap: 1.6rem;
  width: 100%;
`

export const Target = styled.div`
  height: 10rem;
`
