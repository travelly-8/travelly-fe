import styled from 'styled-components'

export const Container = styled.div<{ isKeyboardOpen: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-color: white;
  ${(props) => props.isKeyboardOpen && 'margin-top: -10rem;'}
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`

export const ArrowIcon = styled.img`
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 3.06rem;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

export const LinkText = styled.span`
  font-size: 1.2rem;
  color: #787878;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.8rem;

  &:hover {
    text-decoration: underline;
  }
`
