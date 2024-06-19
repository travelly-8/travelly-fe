import type { IProductDetail } from '@/store/product-slice/product-slice.type'
import { RootState } from '@/store/store'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useSelector } from 'react-redux'
import ReservationCard from '../components/ReservationCard'
import * as S from './ReservationDetails.style'

const ReservationDetails = () => {
  const productDetail = useSelector(
    (state: RootState) => state.product.detail,
  ) as IProductDetail
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Title>예약 상세</S.Title>
      </PageHeader>
      <S.CardContianer>
        <ReviewProductCard productDetail={productDetail} />
      </S.CardContianer>
      <S.ReservationCardContainer>
        <ReservationCard />
        <ReservationCard />
      </S.ReservationCardContainer>
    </S.Wrapper>
  )
}
export default ReservationDetails