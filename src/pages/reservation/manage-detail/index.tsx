import { getMyReservationManageDetail } from '@/api/reservation'
import useGetManageDetail from '@/hooks/api/reserveAPI/useGetManageDetail'
import ReservationCard, {
  IReservationCard,
} from '@/pages/reservation/components/reservation-card'
import Ticket from '@/pages/reservation/components/ticket'

import PageHeader from '@components/page-header'
import { useParams } from 'react-router-dom'

import * as S from './ManageDetail.style'

export default function ManageDetailPage() {
  const { productId = 0 } = useParams()
  const { returnData } = useGetManageDetail(
    ['reservation-manage-detail', String(productId)],
    () => getMyReservationManageDetail(+productId),
  )

  const cardData: IReservationCard = {
    productName: returnData?.productName || '',
    price: returnData?.productPrice || 0,
    date: returnData?.operationDays[0].date || '',
    pendingReservationCount: returnData?.reservations.length,
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
        <S.TicektWrapper>
          {returnData.reservations.map((data) => {
            return <Ticket key={data.id} data={data} />
          })}
        </S.TicektWrapper>
      </S.Wrapper>
    )
  }
}
