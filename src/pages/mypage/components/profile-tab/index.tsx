import arrowRightIcon from '@/assets/common/arrow-right.svg'
import defaultProfileImg from '@/assets/mypage/default-profile.svg'

import * as S from './ProfileTab.style'

const ProfileTab = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.ProfileImg src={defaultProfileImg} alt="프로필 이미지" />
        <S.TextWrapper>
          <S.Nickname>닉네임</S.Nickname>
          <S.Email>이메일</S.Email>
        </S.TextWrapper>
      </S.ProfileWrapper>
      <S.ArrowIcon src={arrowRightIcon} alt="프로필 이미지" />
    </S.Wrapper>
  )
}

export default ProfileTab
