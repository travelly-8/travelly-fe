import { getMyReservationManage } from '@/api/reservation'
import useGetReservationManage from '@/hooks/api/reserveAPI/useGetReservationManage'
import ReservationCard from '@/pages/reservation/components/reservation-card'

import PageHeader from '@components/page-header'

import * as S from './Manage.style'

export default function ManageReservationPage() {
  const { returnData } = useGetReservationManage(
    'reservation-manage',
    getMyReservationManage,
  )

  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>예약 관리</S.Title>
        </S.Content>
      </PageHeader>
      <S.CardWrapper>
        {returnData?.map((data) => {
          return <ReservationCard key={data.productId} data={data} />
        })}
      </S.CardWrapper>
    </S.Wrapper>
  )
}
