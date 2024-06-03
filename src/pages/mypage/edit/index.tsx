import defaultProfileImg from '@/assets/mypage/default-profile.svg'
import exitSvg from '@/assets/mypage/exit.svg'
import keySvg from '@/assets/mypage/key.svg'
import logoutSvg from '@/assets/mypage/logout.svg'
import purplePenSvg from '@/assets/mypage/purple-pen.svg'
import { SheetSliceState, sheet } from '@/store/sheet-slice'

import BlurSheet from '@components/blur-sheet'
import BottomSheet from '@components/bottom-sheet'
import FooterNavigation from '@components/footer-navigation'
import HorizontalMenu from '@components/horizontal-menu'
import PageHeader from '@components/page-header'
import { useDispatch, useSelector } from 'react-redux'

/* eslint-disable import/order */
import { getMemberProfile } from '@/api/myAPI'
import { API_MEMBER } from '@/constants/API'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile'
import { useNavigate } from 'react-router-dom'
import EditPasswordPage from '../components/edit-password'
import * as S from './MyPageEditPage.style'

export default function MyPageEditPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const controlSheet = (sheetType: string, status: boolean) => {
    dispatch(sheet({ name: sheetType, status: status, text: sheetType }))
    return
  }
  const MENU_MAP = [
    {
      id: 1,
      icon: keySvg,
      text: '비밀번호 변경',
      onClick: () => {
        controlSheet('password', true)
      },
    },
    { id: 2, icon: logoutSvg, text: '로그아웃', onClick: () => {} },
  ]

  const { data } = useGetMemberProfile(API_MEMBER.MY_PROFILE, () =>
    getMemberProfile(),
  )

  console.log(data)

  //TODO: 유저 기존 닉네임 BlurSheet에 placeholder로 넣기
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
        <S.ImgWrapper onClick={() => controlSheet('profile', true)}>
          <S.ProfileImg src={defaultProfileImg} alt="프로필" />
          <S.PenImg src={purplePenSvg} alt="프로필 수정" />
        </S.ImgWrapper>
        <S.NicknameWrapper>
          <S.Nickname>{data?.nickname}</S.Nickname>
          <S.Edit onClick={() => controlSheet('nickname', true)}>수정</S.Edit>
        </S.NicknameWrapper>
        <S.Email>{data?.email}</S.Email>
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
      <S.ExitWrapper onClick={() => navigate('/exit')}>
        <S.ExitText>회원 탈퇴</S.ExitText>
        <S.ExitIcon src={exitSvg} alt="회원 탈퇴" />
      </S.ExitWrapper>
      {sheetReducer.status && sheetReducer.text === 'profile' ? (
        <BottomSheet onClick={() => controlSheet('profile', false)}>
          <S.SheetTextWraeppr idx={1}>
            <S.SheetText>갤러리에서 사진 선택</S.SheetText>
          </S.SheetTextWraeppr>
          <S.SheetTextWraeppr idx={2}>
            <S.SheetText>기본 이미지로 변경</S.SheetText>
          </S.SheetTextWraeppr>
        </BottomSheet>
      ) : (
        <S.FooterWrapper>
          <FooterNavigation />
        </S.FooterWrapper>
      )}
      {sheetReducer.status && sheetReducer.text === 'nickname' && (
        <BlurSheet
          title="내 정보 수정"
          button="저장"
          buttonClick={() => controlSheet('nickname', false)}
        >
          <S.BlurSheetWrapper>
            <S.NewNicknameInput placeholder="닉네임" />
          </S.BlurSheetWrapper>
        </BlurSheet>
      )}
      {sheetReducer.status && sheetReducer.text === 'password' && (
        <EditPasswordPage onClick={() => controlSheet('password', false)} />
      )}
    </S.Wrapper>
  )
}
