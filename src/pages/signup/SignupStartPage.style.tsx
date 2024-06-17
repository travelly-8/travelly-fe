import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const Image = styled.img`
  width: 20.8rem;
  height: 19.5rem;
  margin-bottom: 5.6rem;
`

export const StartSNS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 3.5rem;
`

export const Bubble = styled.img`
  width: 11.2079rem;
  height: auto;
`
export const Sns = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`

export const OtherWay = styled.div`
  border-top: 0.1rem solid var(--color-gray-bright);
  padding-top: 0.75rem;
  width: 20.8rem;

  display: flex;
  justify-content: space-between;
`

export const Find = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
`

export const EmailLogin = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
`

export const Content = styled.div`
  margin-left: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
`
