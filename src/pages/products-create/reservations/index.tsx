import { IProductDetail } from '@/store/product-slice/product-slice.type'
import { RootState } from '@/store/store'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useSelector } from 'react-redux'
import * as S from './ProductReservations.style'

const ProductReservations = () => {
  const productDetail = useSelector(
    (state: RootState) => state.product.detail,
  ) as IProductDetail
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Title>예약 관리</S.Title>
      </PageHeader>
      <S.CardContianer>
        <ReviewProductCard productDetail={productDetail} />
        <ReviewProductCard productDetail={productDetail} />
        <ReviewProductCard productDetail={productDetail} />
      </S.CardContianer>
    </S.Wrapper>
  )
}
export default ProductReservations
