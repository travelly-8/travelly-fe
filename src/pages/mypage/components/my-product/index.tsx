import ProductCard from '@components/product-card'
import { IProductCardData } from '@components/product-card/ProductCard.type'
import { Link } from 'react-router-dom'

import * as S from './MyProduct.style'

const MyProduct = ({ data }: { data?: IProductCardData[] }) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>내 상품</S.Title>
        <S.More>
          <Link to="/mypage/my-product-list">더보기&gt;</Link>
        </S.More>
      </S.TitleWrapper>
      <S.CardWrapper>
        {data?.map((product) => {
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

export default MyProduct
