import { getTravellyProfile, getTravllerProfile } from '@/api/myAPI'
import bellIcon from '@/assets/mypage/bell.svg'
import { API_MEMBER } from '@/constants/API'
import useGetProfileByRole from '@/hooks/api/memberAPI/useGetProfileByRole'
import { RootState } from '@/store/store'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'
import { useSelector } from 'react-redux'

import Dashboard from './components/dashboard'
import MyProduct from './components/my-product'
import ProfileTab from './components/profile-tab'
import RecentViewList from './components/recent-view-list'
import * as S from './Mypage.style'

export default function MyPage() {
  const authState = useSelector((state: RootState) => state.auth)
  const { role } = authState
  const { data: profileData, isLoading } = useGetProfileByRole(
    API_MEMBER.MY_PROFILE,
    () => (role === 'travelly' ? getTravellyProfile() : getTravllerProfile()),
  )

  const PRODUCT_MENU: Record<string, JSX.Element> = {
    travelly: <MyProduct />, // TODO: 내 상품 데이터 전달
    traveller: <RecentViewList />, // TODO: 최근 본 상품 데이터 전달
  }
  return (
    <S.Wrapper>
      <PageHeader border={false}>
        <S.Content>
          <S.Title>마이페이지</S.Title>
          <S.Bell src={bellIcon} alt="알림" />
        </S.Content>
      </PageHeader>
      {!isLoading && profileData && <ProfileTab data={profileData} />}
      {!isLoading && profileData && role && (
        <>
          <Dashboard data={profileData} role={role} />
          <S.CardListWrapper>{PRODUCT_MENU[role]}</S.CardListWrapper>
        </>
      )}
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
