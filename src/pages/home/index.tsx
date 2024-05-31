import { useRef, useState } from 'react'

import { getAllProducts } from '@/api/productsAPI'
import { API_PRODUCTS } from '@/constants/API'
import { mockData1 } from '@/constants/MOCK_DATA'
import useGetAllProducts from '@/hooks/api/productsAPI/useGetAllProducts'
import useScrollHandlers from '@/hooks/useScrollHandlers'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'
import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './HomePage.style'
import { IProductsQueryParams } from './HomePage.type'

function HomePage() {
  const navigate = useNavigate()
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  const popularProductRef = useRef<HTMLDivElement>(null)
  const recommendProductRef = useRef<HTMLDivElement>(null)

  const scrollPopularHandlers = useScrollHandlers(popularProductRef)
  const scrollRecommendHandlers = useScrollHandlers(recommendProductRef)

  // react-query 사용 예시

  const { data } = useGetAllProducts(API_PRODUCTS.PRODUCTS, () =>
    getAllProducts(0, 10),
  )
  const responseData = data?.content

  return (
    <>
      <Header kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <S.PageContainer
        $isKebabClicked={isKebabClicked}
        $isSheet={sheetReducer.status}
      >
        {isKebabClicked && <S.BackDrop />}
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/home/trophy.svg" />
            <S.SectionTitle>인기 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper ref={popularProductRef} {...scrollPopularHandlers}>
              {mockData1.map((cardData) => (
                <ProductCard
                  key={cardData.name}
                  cardData={cardData}
                  size="sm"
                />
              ))}
            </S.CardWrapper>
          </S.SectionContentsWrapper>
        </S.ProductsSection>
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/home/star2.svg" />
            <S.SectionTitle>추천 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper
              ref={recommendProductRef}
              {...scrollRecommendHandlers}
            >
              {mockData1.map((cardData) => (
                <ProductCard
                  key={cardData.name}
                  cardData={cardData}
                  size="sm"
                />
              ))}
            </S.CardWrapper>
          </S.SectionContentsWrapper>
        </S.ProductsSection>
        <S.AllProductsSection>
          <S.ALLTitleWrapper>
            <S.SectionTitle>전체 상품</S.SectionTitle>
            <S.ShowAllProducts onClick={() => navigate('/products?type=0')}>
              더보기
            </S.ShowAllProducts>
          </S.ALLTitleWrapper>
          <S.AllCardWrapper>
            {responseData?.map((data, i) => {
              const cardData = {
                image: data.imageUrl,
                name: data.name,
                city: '서울시',
                district: '서초구', //상의해야할 부분
                discount: 10,
                price: data.ticketPrice[Object.keys(data.ticketPrice)[0]],
                reviewPoint: data.rating,
                reviewCount: data.reviewCount,
              }

              return <ProductCard key={i} cardData={cardData} size="bg" />
            })}
          </S.AllCardWrapper>
        </S.AllProductsSection>
        <FooterNavigation />
      </S.PageContainer>
    </>
  )
}

export default HomePage
