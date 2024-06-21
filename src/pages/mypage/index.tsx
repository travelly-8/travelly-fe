import { getTravellyProfile, postTravellerProfile } from '@/api/myAPI'
import bellIcon from '@/assets/mypage/bell.svg'
import { API_MEMBER } from '@/constants/API'
import useGetProfileByRole from '@/hooks/api/memberAPI/useGetProfileByRole'
import { RootState } from '@/store/store'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'
import { IProductCardData } from '@components/product-card/ProductCard.type'
import { useSelector } from 'react-redux'

import Dashboard from './components/dashboard'
import MyProduct from './components/my-product'
import ProfileTab from './components/profile-tab'
import RecentViewList from './components/recent-view-list'
import * as S from './Mypage.style'

function formatRecentProdcuts(data: IProductCardData[]) {
  return data.map((elem) => {
    return {
      productId: elem.id,
    }
  })
}

export default function MyPage() {
  const authState = useSelector((state: RootState) => state.auth)
  const { role } = authState
  const recentProducts = localStorage.getItem('recentProducts')
  const formattedRecentProducts = recentProducts
    ? formatRecentProdcuts(JSON.parse(recentProducts))
    : []
  const { data, isLoading } = useGetProfileByRole(
    role === 'travelly' ? API_MEMBER.MY_TRAVELLY : API_MEMBER.MY_TRAVELLY,
    () =>
      role === 'travelly'
        ? getTravellyProfile()
        : postTravellerProfile(formattedRecentProducts),
  )

  const PRODUCT_MENU: Record<string, JSX.Element> = {
    travelly: <MyProduct data={data?.products} />,
    traveller: <RecentViewList data={data?.recentProducts} />,
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
