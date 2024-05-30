import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.6rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray-bright);
  position: fixed;
  top: 0;
  background-color: var(--color-white);
`
export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
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
