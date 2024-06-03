import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'

import * as S from './RecentViewList.style'

const RecentViewList = ({ data }: { data: IProductCardData[] }) => {
  return (
    <S.Wrapper>
      <S.Title>최근 본 상품</S.Title>
      <S.CardWrapper>
        {data.map((product) => {
          return (
            <div key={product.name}>
              <ProductCard cardData={product} size="sm" />
            </div>
          )
        })}
      </S.CardWrapper>
    </S.Wrapper>
  )
}

export default RecentViewList
