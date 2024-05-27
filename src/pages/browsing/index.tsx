import { mockData1, mockData2 } from '@/constants/MOCK_DATA'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'

import * as S from './BrowsingPage.style'

//TODO: 더보기 버튼에 페이지 연결 필요

function BrowsingPage() {
  return (
    <S.PageContainer>
      <Header />
      <S.ContentsWrapper>
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/browsing/trophy.svg" />
            <S.SectionTitle>인기 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.CardWrapper>
            {mockData1.map((cardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="sm" />
            ))}
          </S.CardWrapper>
        </S.ProductsSection>
        <S.ProductsSection>
          <S.SectionTitleWrapper>
            <S.SectionTitleIcon src="src/assets/browsing/star2.svg" />
            <S.SectionTitle>추천 상품</S.SectionTitle>
          </S.SectionTitleWrapper>
          <S.CardWrapper>
            {mockData1.map((cardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="sm" />
            ))}
          </S.CardWrapper>
        </S.ProductsSection>
        <S.AllProductsSection>
          <S.ALLTitleWrapper>
            <S.SectionTitle>전체 상품</S.SectionTitle>
            <S.ShowAllProducts>더보기</S.ShowAllProducts>
          </S.ALLTitleWrapper>
          <S.AllCardWrapper>
            {mockData2.map((cardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="bg" />
            ))}
          </S.AllCardWrapper>
        </S.AllProductsSection>
      </S.ContentsWrapper>
      <FooterNavigation />
    </S.PageContainer>
  )
}

export default BrowsingPage
