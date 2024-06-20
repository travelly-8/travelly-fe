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
  const { data, isLoading } = useGetProfileByRole(
    API_MEMBER.MY_PROFILE,
    () => (role === 'travelly' ? getTravellyProfile() : getTravllerProfile()), // TODO: traveller 연결
  )

  const PRODUCT_MENU: Record<string, JSX.Element> = {
    travelly: <MyProduct data={data?.products} />,
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
      {/* TODO: 로딩 스켈레톤 처리 */}
      {!isLoading && data && <ProfileTab data={data} />}
      {!isLoading && data && role && (
        <>
          <Dashboard data={data} role={role} />
          <S.CardListWrapper>{PRODUCT_MENU[role]}</S.CardListWrapper>
        </>
      )}
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
