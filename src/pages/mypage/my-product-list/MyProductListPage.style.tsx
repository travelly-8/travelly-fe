import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Content = styled.div`
  margin-left: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
`

export const SearchIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`

export const CardWrapper = styled.div`
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
`
