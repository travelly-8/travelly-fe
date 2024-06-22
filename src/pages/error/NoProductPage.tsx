import NoProductImg from '@/assets/common/no-product.png'

import ProductHeader from '@components/product-header'

import * as S from './ErrorPage.style'

export default function NoProductPage() {
  return (
    <S.Wrapper>
      <ProductHeader />
      <S.Content>
        <img src={NoProductImg} />
        <h1>문제가 생겼어요!</h1>
        <h2>존재하지 않는 상품입니다.</h2>
      </S.Content>
    </S.Wrapper>
  )
}
