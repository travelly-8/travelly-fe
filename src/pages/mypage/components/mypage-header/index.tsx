import backIcon from '@/assets/common/arrow-left.svg'
import bellIcon from '@/assets/mypage/bell.svg'

import { useNavigate } from 'react-router-dom'

import * as S from './MypageHeader.style'

const MypageHeader = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Icon src={backIcon} alt="창 닫기" onClick={() => navigate(-1)} />
      <S.Content>
        <S.Title>마이페이지</S.Title>
        <S.Bell src={bellIcon} alt="알림" />
      </S.Content>
    </S.Wrapper>
  )
}

export default MypageHeader
