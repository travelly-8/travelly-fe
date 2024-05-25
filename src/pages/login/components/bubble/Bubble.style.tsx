import styled from 'styled-components'

export const BubbleWrapper = styled.div<{ dir: 'left' | 'right' }>`
  width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ dir }) => (dir === 'left' ? 'flex-start' : 'flex-end')};
`

export const Bubble = styled.img<{ dir: 'left' | 'right' }>`
  width: 21rem;
  height: 7.8rem;
  position: relative;
  left: ${({ dir }) => (dir === 'left' ? '-1rem' : '1rem')};
`

export const BubbleTextWrapper = styled.div`
  width: 19rem;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2rem;
  position: relative;
  top: -6.8rem;
  padding-left: 1rem;

  h1 {
    color: var(--color-black);
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    color: var(--color-black);
    font-size: 1.2rem;
    font-weight: 400;
  }
  span {
    color: var(--color-black);
    font-size: 1.2rem;
    font-weight: 700;
  }
`

export const BubbleTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`
