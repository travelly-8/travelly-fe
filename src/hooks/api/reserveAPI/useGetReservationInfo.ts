import { useQuery } from '@tanstack/react-query'

import type { IReservationData } from './reservation.type'
function useGetReservationInfo(
  queryKey: string,
  queryFn: () => Promise<IReservationData>,
) {
  const { data, status } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  })
  const returnData = data?.data || []
  return { returnData, status }
}

export default useGetReservationInfo
