import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 1080px;
`
const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`
export default function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Main>
        <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
      </Main>
    </>
  )
}
