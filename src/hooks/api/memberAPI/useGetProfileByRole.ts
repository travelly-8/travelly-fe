import {
  IGetTravellerProfileResponse,
  IGetTravellyProfileResponse,
} from '@/types/getMemberData.type'

import { useQuery } from '@tanstack/react-query'

function useGetProfileByRole(
  queryKey: string,
  queryFn: () => Promise<
    IGetTravellyProfileResponse & IGetTravellerProfileResponse
  >,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn()
      return res.data
    },
  })
}

export default useGetProfileByRole
