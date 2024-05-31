import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
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
