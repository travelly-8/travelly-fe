import { useQuery } from '@tanstack/react-query'

import type { IReservationManageData } from './reservation.type'

export default function useGetReservationManage(
  queryKey: string,
  queryFn: () => Promise<IReservationManageData>,
) {
  const { data, status } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  })
  const returnData = data?.data || []
  return { returnData, status }
}
