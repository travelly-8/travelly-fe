import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 2rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`

export const Img = styled.img`
  width: 7.6rem;
  height: 7.6rem;
  margin-bottom: 6rem;
`

export const WarningText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-black);
`

export const SubText = styled.p`
  font-size: 1.4rem;
  color: var(--color-black);
  margin-top: 1rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`

export const BackButton = styled.button`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: var(--color-main);
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
`
