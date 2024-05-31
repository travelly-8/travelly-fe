import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CardListWrapper = styled.div`
  width: 36rem;
  border-radius: 1rem 1rem 0rem 0rem;
  background: var(--color-white);
  box-shadow: 0px -3px 4px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -1.3rem;
  padding: 2.4rem 0rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
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

export const Bell = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
