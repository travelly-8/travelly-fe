import styled from 'styled-components'

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
`

interface IWrapper {
  isVisible: boolean
}
export const Wrapper = styled.div<IWrapper>`
  border-radius: 1rem 1rem 0rem 0rem;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.8rem;

  position: fixed;
  bottom: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }

  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.05s ease-out;
`
export const BarIcon = styled.img`
  width: 2.7rem;
  height: 0.3rem;
`

export const Content = styled.div`
  width: 100%;
  padding: 1.2rem 2rem 4.8rem 2rem;
`
