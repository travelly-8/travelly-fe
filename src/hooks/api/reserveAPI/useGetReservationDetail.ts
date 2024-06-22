import { useQuery } from '@tanstack/react-query'

import type { IReservationDetailData } from './reservation.type'
function useGetReservationDetail(
  queryKey: string,
  queryFn: () => Promise<IReservationDetailData>,
) {
  const { data, status } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  })
  const returnData = data?.data
  return { returnData, status }
}

export default useGetReservationDetail
