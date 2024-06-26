import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: var(--color-gray-bright);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: var(--color-white);
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
