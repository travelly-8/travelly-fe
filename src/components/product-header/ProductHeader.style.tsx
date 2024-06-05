import styled from 'styled-components'

export const ProductHeaderBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.5;
  z-index: 999;
  cursor: pointer;
`

export const ProductHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  padding: 0.8rem 1.6rem 0.8rem 0;
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-bright);
  z-index: 1000;
`
export const BackBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`
export const Category = styled.span`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem;
  white-space: nowrap;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
