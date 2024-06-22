import { getMyReservation } from '@/api/reservation'
import useGetReservationInfo from '@/hooks/api/reserveAPI/useGetReservationInfo'

import PageHeader from '@components/page-header'
import ReviewListCard from '@components/review-list-card'

import * as S from './ReservationList.style'

function ReservedListPage() {
  const { returnData: reservationData } = useGetReservationInfo(
    'reservation',
    getMyReservation,
  )

  const filterData = reservationData?.filter(
    (data) => data.status === 'ACCEPTED' || data.status === 'PENDING',
  )

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>상품 예약하기</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        {filterData?.map((data) => (
          <ReviewListCard
            key={data.id}
            id={data.id}
            productName={data.productName}
            productId={data.productId}
            productImages={data.productImages}
            buyerName={data.buyerName}
            date={data.date}
            totalPrice={data.totalPrice}
          />
        ))}
      </S.PageContainer>
    </>
  )
}

export default ReservedListPage
