import defaultProfileImg from '@/assets/mypage/default-profile.svg'
import purplePenSvg from '@/assets/mypage/purple-pen.svg'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import * as S from './MyPageEditPage.style'
export default function MyPageEditPage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>내 정보 수정</S.Title>
        </S.Content>
      </PageHeader>
      <S.ProfileWrapper>
        <S.ImgWrapper>
          <S.ProfileImg src={defaultProfileImg} alt="프로필" />
          <S.PenImg src={purplePenSvg} alt="프로필 수정" />
        </S.ImgWrapper>
        <S.NicknameWrapper>
          <S.Nickname>닉네임</S.Nickname>
          <S.Edit>수정</S.Edit>
        </S.NicknameWrapper>
        <S.Email>travelly@gmail.com</S.Email>
      </S.ProfileWrapper>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
