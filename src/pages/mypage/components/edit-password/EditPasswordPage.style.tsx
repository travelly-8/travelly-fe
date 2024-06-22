import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  z-index: 20;
`
export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem; /* 170% */
`
export const Content = styled.div`
  padding: 2.4rem 0rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 32rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`
export const Error = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.432rem;
  margin: 0.3rem 0;
  color: var(--color-caution);
  margin-top: -1.8rem;
`
