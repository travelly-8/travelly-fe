import { IGetMemberProfileResponse } from '@/types/getMemberData.type'

import { useQuery } from '@tanstack/react-query'

function useGetMemberProfile(
  queryKey: string,
  queryFn: () => Promise<IGetMemberProfileResponse>,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn()
      return res.data
    },
  })
}

export default useGetMemberProfile
