import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36rem;
  height: 5.6rem;
  padding: 1.6rem 2rem;
  position: fixed;
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

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 2.4rem;
  padding: 1.6rem 3.2rem;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 36rem;
  height: 14.8rem;
  border-radius: 0rem 0rem 1rem 1rem;
  background: var(--color-white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`
