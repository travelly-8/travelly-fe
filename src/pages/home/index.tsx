import { useRef, useState } from 'react'

import { getAllProducts, getTopProducts } from '@/api/productsAPI'
import star2 from '@/assets/home/star2.svg'
import trophy from '@/assets/home/trophy.svg'
import { API_PRODUCTS } from '@/constants/API'
import useGetAllProducts from '@/hooks/api/productsAPI/useGetProductsQuery'
import useGetTopProductsQuery from '@/hooks/api/productsAPI/useGetTopProductsQuery.ts'
import useProductCardsParams from '@/hooks/api/productsAPI/useProductCardsParams'
import useScrollHandlers from '@/hooks/useScrollHandlers'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'
import ProductCardSkeleton from '@components/product-card/ProductCardSkeleton'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './HomePage.style.tsx'

import type { ISizeProps } from '@components/product-card/ProductCard.style'

function HomePage() {
  const navigate = useNavigate()
  const cardsQueryData = useProductCardsParams()
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )

  const popularProductRef = useRef<HTMLDivElement>(null)
  const recommendProductRef = useRef<HTMLDivElement>(null)

  const scrollPopularHandlers = useScrollHandlers(popularProductRef)
  const scrollRecommendHandlers = useScrollHandlers(recommendProductRef)

  const { data, isPending } = useGetAllProducts(API_PRODUCTS.PRODUCTS, () =>
    getAllProducts(cardsQueryData),
  )

  const { data: topProducts } = useGetTopProductsQuery(
    API_PRODUCTS.TOP_PRODUCTS,
    () => getTopProducts(),
  )
  //TODO: 추천상품 논의 후 나중에 적용
  const allProductsData = data?.content
  const topProductsData = topProducts

  const cardsContents = {
    all: allProductsData,
    top: topProductsData,
  }

  const renderProductCards = (size: ISizeProps['size'], type: 'top' | 'all') =>
    isPending ? (
      <ProductCardSkeleton count={6} size={size} />
    ) : (
      cardsContents[type]?.map((cardData: IProductCardData) => (
        <ProductCard key={cardData.id} cardData={cardData} size={size} />
      ))
    )

  return (
    <>
      <Header
        hamburgerClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
      />
      <S.PageContainer
        $isHamburgerClicked={isHamburgerClicked}
        $isSheet={sheetReducer.status}
      >
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src={trophy} />
            <S.SectionTitle>인기 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper ref={popularProductRef} {...scrollPopularHandlers}>
              {renderProductCards('sm', 'top')}
            </S.CardWrapper>
          </S.SectionContentsWrapper>
        </S.ProductsSection>
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src={star2} />
            <S.SectionTitle>추천 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper
              ref={recommendProductRef}
              {...scrollRecommendHandlers}
            >
              {renderProductCards('sm', 'all')}
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
          <S.AllCardWrapper>{renderProductCards('bg', 'all')}</S.AllCardWrapper>
        </S.AllProductsSection>
        <FooterNavigation />
      </S.PageContainer>
    </>
  )
}

export default HomePage
