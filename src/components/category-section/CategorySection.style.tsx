import styled, { keyframes } from 'styled-components'

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 14.8rem;
    opacity: 1;
  }
`

export const CategoryContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 2.4rem;
  padding: 1.6rem 3.2rem;
  position: absolute;
  top: 5.6rem;
  left: 0;
  height: 14.8rem;
  border-radius: 0rem 0rem 1rem 1rem;
  background: var(--color-white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

  animation: ${slideDown} 0.3s ease-out;
`
