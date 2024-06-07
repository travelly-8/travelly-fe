import styled from 'styled-components'

export const PageContainer = styled.main<{
  $isSearchSheet: boolean
}>`
  background-color: var(--color-white);
  display: ${({ $isSearchSheet }) => ($isSearchSheet ? 'none' : 'block')};

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
