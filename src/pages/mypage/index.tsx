import FooterNavigation from '@components/footer-navigation'

import Dashboard from './components/dashboard'
import MypageHeader from './components/mypage-header'
import ProfileTab from './components/profile-tab'
import RecentViewList from './components/recent-view-list'
import data from './dummyData.json'
import * as S from './Mypage.style'

export default function MyPage() {
  const { email, nickname, coin, imageUrl, role, reviews, recentViews } = data
  return (
    <S.Wrapper>
      <MypageHeader />
      <ProfileTab data={{ email, nickname, imageUrl }} />
      <Dashboard data={{ role, coin, reviews }} />
      <S.CardListWrapper>
        <RecentViewList data={recentViews} />
      </S.CardListWrapper>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
