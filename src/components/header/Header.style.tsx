import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem 2rem;
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-bright);
  z-index: 1000;
`

export const Label = styled.span`
  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  line-height: 3.06rem;
  font-weight: 700;
`
export const IconContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`
export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
