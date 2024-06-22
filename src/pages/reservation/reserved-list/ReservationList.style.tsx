import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  padding: 0 2rem 0;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const HeaderTitle = styled.span`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.06rem;
`
