import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`

export const Image = styled.img`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0.8rem 0.9rem;
  z-index: 1;
  border-radius: 50%;
  display: flex;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`

export const Index = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--color-white);
  padding: 0.6rem 1rem;
  border-radius: 0.9rem;
  font-size: 1rem;
`
