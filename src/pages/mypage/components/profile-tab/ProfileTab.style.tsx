import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 36rem;
  height: 14.2rem;
  padding: 7.2rem 2rem 2.4rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.3rem;
`
export const ProfileImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 50%;
`
export const TextWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`
export const Nickname = styled.p`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 700;
`

export const Email = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 400;
`
export const ArrowIcon = styled.img`
  width: 0.8rem;
  height: 1.6rem;
  cursor: pointer;
`
