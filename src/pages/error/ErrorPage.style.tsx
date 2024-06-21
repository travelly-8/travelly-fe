import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 12.7rem;
    height: 12.6rem;
  }
  h1 {
    color: var(--color-black);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.06rem; /* 170% */
  }
  h2 {
    color: var(--color-black);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.38rem; /* 170% */
    margin-top: 0.4rem;
  }
`
export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
