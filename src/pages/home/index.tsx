import { useRef, useState } from 'react'

import { getAllProducts } from '@/api/productsAPI'
import star2 from '@/assets/home/star2.svg'
import trophy from '@/assets/home/trophy.svg'
import { API_PRODUCTS } from '@/constants/API'
import useGetAllProducts from '@/hooks/api/productsAPI/useGetProductsQuery'
import useProductCardsParams from '@/hooks/api/productsAPI/useProductCardsParams'
import useScrollHandlers from '@/hooks/useScrollHandlers'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'
import { SizeProps } from '@components/product-card/ProductCard.style'
import ProductCardSkeleton from '@components/product-card/ProductCardSkeleton'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './HomePage.style'

function HomePage() {
  const navigate = useNavigate()
  const cardsQueryData = useProductCardsParams()
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  const popularProductRef = useRef<HTMLDivElement>(null)
  const recommendProductRef = useRef<HTMLDivElement>(null)

  const scrollPopularHandlers = useScrollHandlers(popularProductRef)
  const scrollRecommendHandlers = useScrollHandlers(recommendProductRef)

  const { data, isPending } = useGetAllProducts(API_PRODUCTS.PRODUCTS, () =>
    getAllProducts(cardsQueryData),
  )
  //TODO: 인기상품, 추천상품 논의 후 나중에 적용
  const cardsContents = data?.content

  const renderProductCards = (size: SizeProps['size']) =>
    isPending ? (
      <ProductCardSkeleton count={6} size={size} />
    ) : (
      cardsContents?.map((cardData) => (
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
              {renderProductCards('sm')}
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
              {renderProductCards('sm')}
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
          <S.AllCardWrapper>{renderProductCards('bg')}</S.AllCardWrapper>
        </S.AllProductsSection>
        <FooterNavigation />
      </S.PageContainer>
    </>
  )
}

export default HomePage
