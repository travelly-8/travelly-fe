import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem; /* 170% */
`

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8rem;
  height: 9rem;
  align-self: stretch;
  margin-left: 2rem;
`

export const ProfileImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  margin-right: 2.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Nickname = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`

export const Email = styled.div`
  color: black;
  font-size: 1.2rem;
`

export const BodyContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-gray-light);
  width: 32rem;
`

export const Tab = styled.button`
  flex-grow: 1;
  border: none;
  background: none;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.38rem; /* 170% */
  color: var(--color-gray-middle);
  cursor: pointer;
  padding: 0.5rem;
  position: relative;

  &.active {
    color: var(--color-black);

    &::after {
      content: '';
      position: absolute;
      bottom: -0.01rem;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100%);
      height: 0.4rem;
      background: var(--color-main);
      border-radius: 999rem;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
`
