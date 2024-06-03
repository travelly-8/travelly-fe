import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;
`

export const ImgWrapper = styled.div`
  position: relative;
`

export const CommunityImg = styled.img`
  width: 10.7rem;
  height: 10.2rem;
`
export const ChipWrapper = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 0.84rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Name = styled.h1`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem; /* 170% */
`
export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.42rem;
`
export const Member = styled.h2`
  color: var(--color-black);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8rem;
`
export const MasterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.42rem;
`

export const Crown = styled.img`
  width: 1.4686rem;
  height: 1.4rem;
`

export const Master = styled.h3`
  color: var(--color-gray-middle);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8rem;
`
