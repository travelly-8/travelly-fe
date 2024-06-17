import SearchIcon from '@/assets/common/search.svg'
import AppBar from '@/pages/products/components/app-bar'

import PageHeader from '@components/page-header'
import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'

import * as S from './MyProductListPage.style'

const dummyCardDataList: IProductCardData[] = [
  {
    id: 1,
    images: [
      {
        url: 'url',
        order: 1,
      },
    ],
    name: '상품명',
    cityCode: 'cityCode',
    address: 'address',
    discount: 10,
    ticketDto: [
      {
        name: 'name',
        price: 1000,
        description: 'desc',
      },
    ],
    rating: 1,
    reviewCount: 1,
  },
  {
    id: 2,
    images: [
      {
        url: 'url',
        order: 1,
      },
    ],
    name: '상품명',
    cityCode: 'cityCode',
    address: 'address',
    discount: 10,
    ticketDto: [
      {
        name: 'name',
        price: 1000,
        description: 'desc',
      },
    ],
    rating: 1,
    reviewCount: 1,
  },
]

export default function MyProductListPage() {
  //TODO: 내 상품 리스트 API 연결
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>내 상품</S.Title>
          <S.SearchIcon src={SearchIcon} alt="검색" />
        </S.Content>
      </PageHeader>
      <AppBar totalElements={0} onOrderClick={() => {}} />
      <S.CardWrapper>
        {dummyCardDataList.map((data) => {
          return (
            <ProductCard
              key={data.id}
              cardData={data}
              size="sm"
              bookmark={false}
            />
          )
        })}
      </S.CardWrapper>
    </S.Wrapper>
  )
}
