import CommunityCard from '@components/community-card'

import * as S from './CommunityList.style'

const CommunityList = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>커뮤니티</S.Title>
        <S.More>더보기&gt;</S.More>
      </S.TitleWrapper>
      <S.CardWrapper>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </S.CardWrapper>
    </S.Wrapper>
  )
}

export default CommunityList
