import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 12.1rem;
  justify-content: center;
  border-radius: 0.8rem;
  background: var(--color-white);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  padding: 1.7rem 2rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  h1 {
    color: var(--color-black);
    text-align: left;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }
  h2 {
    padding-top: 1.2rem;
    padding-bottom: 1.6rem;
    color: var(--color-gray-middle);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem; /* 150% */
    text-align: left;
  }
  h3 {
    color: var(--color-gray-light);
    text-align: right;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem; /* 150% */
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`
