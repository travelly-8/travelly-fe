import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 2rem;
  padding: 1.2rem 0rem;
`
export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.58rem;
`
export const Icon = styled.img`
  width: 1.52rem;
  height: 1.52rem;
`

export const Text = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
`
export const Arrow = styled.img`
  width: 0.6rem;
  height: 1.2rem;
`
