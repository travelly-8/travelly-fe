import styled from 'styled-components'

export const PageContainer = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const BackBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const HeaderTitle = styled.span`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.06rem;
`
