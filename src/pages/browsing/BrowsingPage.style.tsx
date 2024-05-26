import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
