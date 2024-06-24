import AlertIcon from '@/assets/home/alert.svg'

import * as S from './NotiCard.style'

const NotiCard = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <img src={AlertIcon} alt="알림" />
        <h1>이벤트 알림</h1>
      </S.TitleWrapper>
      <h2>지금 경기도 지역 랜드 마크 티켓을 구매하면 3% 환급!</h2>
      <h3>24.06.25-24.07.31</h3>
    </S.Wrapper>
  )
}

export default NotiCard
