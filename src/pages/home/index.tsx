import { useRef, useState } from 'react'

import { mockData1, mockData2 } from '@/constants/MOCK_DATA'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './HomePage.style'

function HomePage() {
  const navigate = useNavigate()
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const cardWrapper = useRef<HTMLDivElement>(null)
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useHorizontalScroll()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  const scrollHandlers = {
    onMouseDown: handleMouseDown(cardWrapper),
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove(cardWrapper),
    onTouchStart: handleMouseDown(cardWrapper),
    onTouchEnd: handleMouseUp,
    onTouchMove: handleMouseMove(cardWrapper),
  }

  return (
    <>
      <Header kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <S.PageContainer
        $isKebabClicked={isKebabClicked}
        $isSheet={sheetReducer.status}
      >
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/home/trophy.svg" />
            <S.SectionTitle>인기 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper
              ref={cardWrapper}
              {...scrollHandlers}
              $isKebabClicked={isKebabClicked}
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
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/home/star2.svg" />
            <S.SectionTitle>추천 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentsWrapper>
            <S.CardWrapper
              ref={cardWrapper}
              {...scrollHandlers}
              $isKebabClicked={isKebabClicked}
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
            <S.ShowAllProducts onClick={() => navigate('/products')}>
              더보기
            </S.ShowAllProducts>
          </S.ALLTitleWrapper>
          <S.AllCardWrapper $isKebabClicked={isKebabClicked}>
            {mockData2.map((cardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="bg" />
            ))}
          </S.AllCardWrapper>
        </S.AllProductsSection>
      </S.PageContainer>
      <FooterNavigation />
    </>
  )
}

export default HomePage
