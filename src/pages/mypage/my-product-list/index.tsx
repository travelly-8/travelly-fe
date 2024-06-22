import { getTravellyProfile } from '@/api/myAPI'
import SearchIcon from '@/assets/common/search.svg'
import { API_MEMBER } from '@/constants/API'
import useGetProfileByRole from '@/hooks/api/memberAPI/useGetProfileByRole'
import AppBar from '@/pages/products/components/app-bar'

import PageHeader from '@components/page-header'
import ProductCard from '@components/product-card'

import * as S from './MyProductListPage.style'

export default function MyProductListPage() {
  const { data, isLoading } = useGetProfileByRole(API_MEMBER.MY_PROFILE, () =>
    getTravellyProfile(),
  )

  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>내 상품</S.Title>
          <S.SearchIcon src={SearchIcon} alt="검색" />
        </S.Content>
      </PageHeader>
      <AppBar totalElements={data?.products.length} onOrderClick={() => {}} />
      <S.CardWrapper>
        {data?.products.map((elem) => {
          return (
            <ProductCard
              key={elem.id}
              cardData={elem}
              size="sm"
              bookmark={false}
            />
          )
        })}
      </S.CardWrapper>
    </S.Wrapper>
  )
}
