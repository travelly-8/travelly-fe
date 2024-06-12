import bellIcon from '@/assets/mypage/bell.svg'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import CommunityList from './components/community-list'
import Dashboard from './components/dashboard'
import MyProduct from './components/my-product'
import ProfileTab from './components/profile-tab'
import RecentViewList from './components/recent-view-list'
import dummyData from './dummyData.json'
import * as S from './Mypage.style'

export default function MyPage() {
  // TODO : '/my' api 연결
  const { email, nickname, coin, imageUrl, role, reviews } = dummyData

  const PRODUCT_MENU: Record<string, JSX.Element> = {
    travelly: <MyProduct />, // TODO: 내 상품 데이터 전달
    traveller: <RecentViewList />, // TODO: 최근 본 상품 데이터 전달
  }
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>마이페이지</S.Title>
          <S.Bell src={bellIcon} alt="알림" />
        </S.Content>
      </PageHeader>
      <ProfileTab data={{ email, nickname, imageUrl }} />
      <Dashboard data={{ role, coin, reviews }} />
      <S.CardListWrapper>
        {PRODUCT_MENU[role]}
        <CommunityList />
      </S.CardListWrapper>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
