import styled from 'styled-components'

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem 2rem 3.2rem;
  gap: 1.6rem;
  border-bottom: 0.1rem solid var(--color-gray-light);
`
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`
export const Map = styled.div`
  width: 100%;
  height: 16rem;
  background-color: var(--color-gray-light);
`

export const LabelL = styled.span`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.38rem;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

export const LabelM = styled.span`
  display: flex;
  align-items: flex-start;
  width: 4.2rem;
  color: var(--color-black);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`
export const GrayText = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const GrayATag = styled.a`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-decoration: underline;
  white-space: normal;
  word-break: break-all;
`

export const Description = styled.div`
  display: flex;
  gap: 1.5rem;
  white-space: nowrap;
`
