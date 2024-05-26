import styled from 'styled-components'

export const Navigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4.6rem;
  gap: 0.4rem;
  cursor: pointer;
  span {
    color: var(--color-black);
    font-size: 1.2rem;
    line-height: 1.8rem;
    white-space: nowrap;
  }
`
export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`