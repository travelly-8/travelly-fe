import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const ProfileWrapper = styled.div`
  margin-top: 4.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`

export const ImgWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`

export const PenImg = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  bottom: 0.8rem;
  left: 2.8rem;
`

export const NicknameWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`
export const Nickname = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.38rem; /* 170% */
`
export const Edit = styled.span`
  color: var(--color-main);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8rem; /* 180% */
  position: absolute;
  right: 14rem;
  cursor: pointer;
`

export const Email = styled.span`
  margin-top: 0.4rem;
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`
export const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
`
