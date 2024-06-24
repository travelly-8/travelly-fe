import { getMyReservationManageDetail } from '@/api/reservation'
import useGetManageDetail from '@/hooks/api/reserveAPI/useGetManageDetail'
import ManageCard from '@/pages/reservation/components/ManageCard'
import ReservationCard, {
  IReservationCard,
} from '@/pages/reservation/components/reservation-card'
import PageHeader from '@components/page-header'
import { useParams } from 'react-router-dom'
import * as S from './ManageDetail.style'

export default function ManageDetailPage() {
  const { productId = 0 } = useParams<{ productId: string }>()

  const { returnData } = useGetManageDetail(
    ['reservation-manage-detail', String(productId)],
    () => getMyReservationManageDetail(+productId),
  )

  const cardData: IReservationCard = {
    productName: returnData?.productName || '',
    price: returnData?.productPrice || 0,
    date: returnData?.operationDays[0]?.date || '',
    pendingReservationCount: returnData?.reservations.length || 0,
    productImages: returnData?.productImages || [],
    productId: returnData?.productId || 0,
  }

  if (returnData) {
    return (
      <S.Wrapper>
        <PageHeader>
          <S.Content>
            <S.Title>예약 상태</S.Title>
          </S.Content>
        </PageHeader>
        <S.CardWrapper>
          <ReservationCard data={cardData} />
        </S.CardWrapper>
        <S.ReservationCardContainer>
          {returnData.reservations.map((reservation: any) => (
            <ManageCard
              key={reservation.id}
              reservation={{ ...reservation, productId: returnData.productId }}
            />
          ))}
        </S.ReservationCardContainer>
      </S.Wrapper>
    )
  }
}
