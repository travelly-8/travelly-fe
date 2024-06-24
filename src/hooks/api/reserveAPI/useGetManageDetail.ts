import { useQuery } from '@tanstack/react-query'

import type { IManageDetailData } from './reservation.type'

export default function useGetManageDetail(
  queryKey: string[],
  queryFn: () => Promise<IManageDetailData>,
) {
  const { data, status } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  })
  const returnData = data?.data
  return { returnData, status }
}
