import { useNavigate } from 'react-router-dom'

import * as S from './BackBar.style'

const BackBar = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Icon
        src="/src/assets/common/arrow-left.svg"
        alt="뒤로 가기"
        onClick={() => navigate(-1)}
      />
    </S.Wrapper>
  )
}

export default BackBar
