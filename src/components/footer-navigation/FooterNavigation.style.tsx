import styled from 'styled-components'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0.8rem 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--color-white);
  border-radius: 1rem 1rem 0 0;
  border-top: 0.1rem solid var(--color-gray-light);

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 360px;
  }
`
