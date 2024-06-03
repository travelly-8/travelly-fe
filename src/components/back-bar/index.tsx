import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './BackBar.style'

const BackBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    const isProductsPage = location.pathname === '/products'
    //TODO: 임시 경로 처리. 나중에 페이지가 더 늘어나면 다시 로직 짜야할 거 같습니다.

    if (isProductsPage) {
      navigate('/')
    } else {
      navigate(-1)
    }
  }

  return (
    <S.Wrapper>
      <S.Icon
        src="/src/assets/common/arrow-left.svg"
        alt="뒤로 가기"
        onClick={handleClick}
      />
    </S.Wrapper>
  )
}

export default BackBar
