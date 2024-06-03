import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`
export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
`

export const Button = styled.span`
  color: var(--color-main);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
  cursor: pointer;
`
