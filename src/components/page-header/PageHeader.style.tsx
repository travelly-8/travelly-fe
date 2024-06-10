import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 4.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.6rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray-bright);
  background-color: var(--color-white);
  position: sticky;
  top: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`
