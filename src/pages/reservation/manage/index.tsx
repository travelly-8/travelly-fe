import { getMyReservationManage } from '@/api/reservation'
import useGetReservationManage from '@/hooks/api/reserveAPI/useGetReservationManage'

import PageHeader from '@components/page-header'

import * as S from './Manage.style'

export default function ManageReservationPage() {
  const { returnData } = useGetReservationManage(
    'reservation-manage',
    getMyReservationManage,
  )

  console.log(returnData)
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>예약 관리</S.Title>
        </S.Content>
      </PageHeader>
    </S.Wrapper>
  )
}
