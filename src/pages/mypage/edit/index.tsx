import defaultProfileImg from '@/assets/mypage/default-profile.svg'
import exitSvg from '@/assets/mypage/exit.svg'
import keySvg from '@/assets/mypage/key.svg'
import logoutSvg from '@/assets/mypage/logout.svg'
import purplePenSvg from '@/assets/mypage/purple-pen.svg'

import FooterNavigation from '@components/footer-navigation'
import HorizontalMenu from '@components/horizontal-menu'
import PageHeader from '@components/page-header'

import * as S from './MyPageEditPage.style'

export default function MyPageEditPage() {
  const MENU_MAP = [
    { id: 1, icon: keySvg, text: '비밀번호 변경', onClick: () => {} },
    { id: 2, icon: logoutSvg, text: '로그아웃', onClick: () => {} },
  ]

  //TODO: 소셜 로그인한 유저에게는 비밀번호 변경 메뉴 띄우지 않기
  //TODO: 프로필 이미지 버튼 클릭 시 파일 불러오기
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
      <S.MenuWrapper>
        {MENU_MAP.map((menu) => {
          return (
            <S.Menu key={menu.id} idx={menu.id}>
              <HorizontalMenu
                icon={menu.icon}
                text={menu.text}
                onClick={menu.onClick}
              />
            </S.Menu>
          )
        })}
      </S.MenuWrapper>
      <S.ExitWrapper>
        <S.ExitText>회원 탈퇴</S.ExitText>
        <S.ExitIcon src={exitSvg} alt="회원 탈퇴" />
      </S.ExitWrapper>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
