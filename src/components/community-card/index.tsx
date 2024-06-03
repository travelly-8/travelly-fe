import CommunityImg from '@/assets/mypage/comunity.png'
import CrownImg from '@/assets/mypage/crown.svg'

import Chip from '@components/chip'

import * as S from './CommunityCard.style'

const CommunityCard = () => {
  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.CommunityImg src={CommunityImg} alt="커뮤니티" />
        <S.ChipWrapper>
          <Chip text="참가중" />
        </S.ChipWrapper>
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.Name>커뮤니티명</S.Name>
        <S.MemberWrapper>
          <S.Member>참가자</S.Member>
          <S.Member>000,000명</S.Member>
        </S.MemberWrapper>
        <S.MasterWrapper>
          <S.Crown src={CrownImg} alt="운영자" />
          <S.Master>(운영자 닉네임)</S.Master>
        </S.MasterWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default CommunityCard
