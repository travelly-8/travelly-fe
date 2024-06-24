import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem 0;
  border-bottom: 0.1rem solid var(--color-gray-light);

  img {
    width: 6.1rem;
    height: 6.1rem;
    border-radius: 0.8rem;
  }

  h1 {
    color: var(--color-black);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }

  h2 {
    color: var(--color-black);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem; /* 150% */
  }

  span {
    color: var(--color-gray-middle);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem; /* 150% */
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
`

export const NameAndPriceDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
`

export const PriceAndDate = styled.div`
  display: flex;
  flex-direction: row;
`

export const Badge = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  background: var(--color-gray-bright);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: var(--color-main);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }
`
