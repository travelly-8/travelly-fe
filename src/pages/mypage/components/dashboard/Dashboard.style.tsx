import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  justify-content: center;
  height: 14.2rem;
  background-color: var(--color-gray-bright);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1) inset;
`

export const Wrapper = styled.div`
  width: 32rem;
  height: 10rem;
  margin: 1.3rem;
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.85);
  box-shadow:
    0px 0px 2px 0px rgba(0, 0, 0, 0.05),
    0px 5px 10px 0px rgba(0, 0, 0, 0.08),
    0px 1px 5px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-bottom: 0.8rem;
`
export const DashTitle = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`

export const DashNumber = styled.p`
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`
