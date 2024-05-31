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
  margin-left: 2.4rem;
`

export const Content = styled.div`
  margin-top: 4.8rem;
  padding: 2.4rem 0rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 32rem;
`

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`

export const ButtonText = styled.span`
  color: var(--color-white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.38rem; /* 170% */
`

export const UpperText = styled.span`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem; /* 170% */
  margin-bottom: 4.4rem;
  width: 100%;
  text-align: left;
`

export const LowerText = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
  margin-bottom: 5.6rem;
`

export const ExitButton = styled.button`
  background-color: transparent;
  color: var(--color-main);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8rem; /* 150% */
  margin-top: 1.6rem;
`
