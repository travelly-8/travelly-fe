import { ITopKeyword } from '@components/search-sheet/SearchSheet.type'
import { useQuery } from '@tanstack/react-query'

interface IKeywordData {
  data: ITopKeyword[]
}

function useGetTopKeyword(
  queryKey: string,
  queryFn: () => Promise<IKeywordData>,
) {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const currentMinute = currentTime.getMinutes()
  const formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour
  const formattedMinute =
    currentMinute < 10 ? `0${currentMinute}` : currentMinute
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn()
      return { data: res.data, time: `${formattedHour}:${formattedMinute}` }
    },
  })
}

export default useGetTopKeyword
