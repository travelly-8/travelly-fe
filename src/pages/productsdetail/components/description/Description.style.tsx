import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem 2rem;
  gap: 2.4rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
export const Title = styled.span`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.38rem; /* 170% */
`
export const Description = styled.span`
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const DescriptionImg = styled.img`
  width: 100%;
  height: 28.8rem;
`
