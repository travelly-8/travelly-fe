import { mockData } from '@/constants/MOCK_DATA'

import FooterNavigation from '@components/footer-navigation'
import Header from '@components/header'
import ProductCard from '@components/product-card'

import * as S from './BrowsingPage.style'

function BrowsingPage() {
  return (
    <S.Container>
      <Header />
      {mockData.map((cardData) => (
        <ProductCard key={cardData.name} cardData={cardData} size="sm" />
      ))}
      <FooterNavigation />
    </S.Container>
  )
}

export default BrowsingPage
