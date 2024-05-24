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
