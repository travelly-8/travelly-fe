import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border-bottom: 0.1rem solid var(--color-gray-light);
`
export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
`

export const DescriptonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1.7rem;
  gap: 0.9rem;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`

export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

export const SellingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const BlackTextL = styled.span`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.06rem;
`
export const BlackTextM = styled.span`
  color: var(--black-333, #333);
  font-size: 1.4rem;
  line-height: 2.38rem;
`
export const BlackTextS = styled.span`
  color: var(--black-333, #333);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const GrayText = styled.span`
  color: var(--color-gray-middle);
  font-family: Pretendard;
  font-size: 1.2rem;
  line-height: 1.8rem;
  cursor: pointer;
`

export const BlueText = styled.span`
  color: var(-- color-main);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.38rem;
`
