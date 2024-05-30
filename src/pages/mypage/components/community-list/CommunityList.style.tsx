import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 25.9rem;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`
export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`
export const More = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.4rem;
  font-weight: 400;
  cursor: pointer;
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
