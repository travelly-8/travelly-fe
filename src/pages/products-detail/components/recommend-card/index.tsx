import { useRef } from 'react'

import useScrollHandlers from '@/hooks/useScrollHandlers'

import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'

import * as S from './RecommendCard.styles'

const RecommendCard = ({ cards }: { cards: IProductCardData[] }) => {
  const recommendedProductsRef = useRef<HTMLDivElement>(null)
  const scrollrecommendedProductHandler = useScrollHandlers(
    recommendedProductsRef,
  )

  return (
    <S.Wrapper>
      <S.Title>추천관광지</S.Title>

      <S.ProductList
        ref={recommendedProductsRef}
        {...scrollrecommendedProductHandler}
      >
        {cards.map((card) => (
          <ProductCard key={card.id} cardData={card} size="summary" />
        ))}
      </S.ProductList>
    </S.Wrapper>
  )
}

export default RecommendCard
