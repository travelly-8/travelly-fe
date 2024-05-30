import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
