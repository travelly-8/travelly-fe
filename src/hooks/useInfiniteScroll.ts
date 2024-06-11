import { QueryKey, useInfiniteQuery } from '@tanstack/react-query'

interface IUseInfiniteScrollParams<T> {
  queryKey: QueryKey
  queryFn: ({ pageParam }: { pageParam: number }) => Promise<T>
  getNextPageParam: (lastPage: T) => number | undefined
  initialPageParam?: number
}

const useInfiniteScroll = <T>({
  queryKey,
  queryFn,
  getNextPageParam,
  initialPageParam = 0,
}: IUseInfiniteScrollParams<T>) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isPending } =
    useInfiniteQuery({
      queryKey,
      queryFn,
      getNextPageParam,
      initialPageParam,
    })

  return {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isPending,
  }
}

export default useInfiniteScroll
