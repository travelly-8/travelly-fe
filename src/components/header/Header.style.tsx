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
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  z-index: 1000;
`

export const Label = styled.span`
  color: #333;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem;
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
  grid-column-gap: 3.8rem;
  grid-row-gap: 2.4rem;
  padding: 1.6rem 3.2rem;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 36rem;
  height: 14.8rem;
  border-radius: 0rem 0rem 1rem 1rem;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`
export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.6rem;
  gap: 0.4rem;
  cursor: pointer;
  span {
    color: #333;
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    white-space: nowrap;
  }
`
