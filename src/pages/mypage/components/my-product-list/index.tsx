import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'

import * as S from './MyProductList.style'

const MyProductList = ({ data }: { data: IProductCardData[] }) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>내 상품</S.Title>
        <S.More>더보기&gt;</S.More>
      </S.TitleWrapper>
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

export default MyProductList
