import arrowRightIcon from '@/assets/common/arrow-right.svg'

import { useNavigate } from 'react-router-dom'

import * as S from './ProfileTab.style'

interface IProfileTab {
  data: {
    email: string
    nickname: string
    imageUrl: string
  }
}

const ProfileTab = ({ data }: IProfileTab) => {
  const { email, nickname, imageUrl } = data
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.ProfileImg src={imageUrl} alt="프로필 이미지" />
        <S.TextWrapper>
          <S.Nickname>{nickname}</S.Nickname>
          <S.Email>{email}</S.Email>
        </S.TextWrapper>
      </S.ProfileWrapper>
      <S.ArrowIcon
        src={arrowRightIcon}
        alt="프로필 이미지"
        onClick={() => navigate('/mypage/edit')}
      />
    </S.Wrapper>
  )
}

export default ProfileTab
