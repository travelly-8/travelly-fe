import styled from 'styled-components'

export const PageContainer = styled.main<{
  $isKebabClicked: boolean
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
