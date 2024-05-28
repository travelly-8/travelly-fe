import { RefObject, useRef, useState } from 'react'

import { mockData1, mockData2 } from '@/constants/MOCK_DATA'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './HomePage.style'

function useScrollHandlers(ref: RefObject<HTMLDivElement>) {
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useHorizontalScroll()

  return {
    onMouseDown: handleMouseDown(ref),
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove(ref),
    onTouchStart: handleMouseDown(ref),
    onTouchEnd: handleMouseUp,
    onTouchMove: handleMouseMove(ref),
  }
}

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
            {mockData2.map((cardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="bg" />
            ))}
          </S.AllCardWrapper>
        </S.AllProductsSection>
        <FooterNavigation />
      </S.PageContainer>
    </>
  )
}

export default HomePage
