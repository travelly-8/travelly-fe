import { useEffect, useState } from 'react'

import {
  getMemberProfile,
  putMemberNickname,
  putMemberProfileImage,
  putMemberProfileImageReset,
} from '@/api/myAPI'
import defaultProfileImg from '@/assets/mypage/default-profile.svg'
import exitSvg from '@/assets/mypage/exit.svg'
import keySvg from '@/assets/mypage/key.svg'
import logoutSvg from '@/assets/mypage/logout.svg'
import purplePenSvg from '@/assets/mypage/purple-pen.svg'
import { API_MEMBER } from '@/constants/API'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile'
import useLogout from '@/hooks/useLogout'
import EditPasswordPage from '@/pages/mypage/components/edit-password'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import BlurSheet from '@components/blur-sheet'
import BottomSheet from '@components/bottom-sheet'
import FooterNavigation from '@components/footer-navigation'
import HorizontalMenu from '@components/horizontal-menu'
import PageHeader from '@components/page-header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './MyPageEditPage.style'

export default function MyPageEditPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = useLogout()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
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
    {
      id: 2,
      icon: logoutSvg,
      text: '로그아웃',
      onClick: () => {
        logout()
        navigate('/')
      },
    },
  ]

  // 마이페이지 수정 정보 패치
  const { data, refetch, status } = useGetMemberProfile(
    API_MEMBER.MY_PROFILE,
    () => getMemberProfile(),
  )
  // 닉네임 변경
  const [newNickname, setNewNickname] = useState<string>('')

  const saveNewNickname = () => {
    putMemberNickname({ nickname: newNickname })
      .then(() => {
        refetch()
        controlSheet('nickname', false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // 프로필 이미지 변경
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImg)

  useEffect(() => {
    if (status === 'success') {
      setProfileImage(data?.imageUrl || defaultProfileImg)
    }
  }, [status, data])

  const uploadImage = async (imageFile: File) => {
    const formData = new FormData()
    formData.append('file', imageFile)

    putMemberProfileImage(formData)
      .then(() => {
        refetch()
        controlSheet('profile', false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      uploadImage(file)
    }
  }

  // 프사 리셋
  const resetProfileImage = () => {
    putMemberProfileImageReset()
      .then(() => {
        refetch()
        controlSheet('profile', false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>내 정보 수정</S.Title>
        </S.Content>
      </PageHeader>
      <S.ProfileWrapper>
        <S.ImgWrapper onClick={() => controlSheet('profile', true)}>
          <S.ProfileImg src={profileImage} alt="프로필" />
          <S.PenImg src={purplePenSvg} alt="프로필 수정" />
        </S.ImgWrapper>
        <S.NicknameWrapper>
          <S.EmptyBlock />
          <S.Nickname>{data?.nickname}</S.Nickname>
          <S.Edit onClick={() => controlSheet('nickname', true)}>수정</S.Edit>
        </S.NicknameWrapper>
        <S.Email>{data?.email}</S.Email>
      </S.ProfileWrapper>
      <S.MenuWrapper>
        {MENU_MAP.filter((menu) => {
          if (data?.type === 'social' && menu.text === '비밀번호 변경') {
            return false
          } else {
            return true
          }
        }).map((menu) => {
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
            <S.FileInput type="file" onChange={handleFileChange} />
          </S.SheetTextWraeppr>
          <S.SheetTextWraeppr idx={2} onClick={resetProfileImage}>
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
          buttonClick={saveNewNickname}
        >
          <S.BlurSheetWrapper>
            <S.NewNicknameInput
              placeholder={data?.nickname}
              onChange={(e) => setNewNickname(e.target.value)}
            />
          </S.BlurSheetWrapper>
        </BlurSheet>
      )}
      {sheetReducer.status && sheetReducer.text === 'password' && (
        <EditPasswordPage onClick={() => controlSheet('password', false)} />
      )}
    </S.Wrapper>
  )
}
