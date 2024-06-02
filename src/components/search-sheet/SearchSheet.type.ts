export interface IPopularSearchProps {
  popularData: IPopularData
}

interface IPopularData {
  time: string
  items: IPopularItem[]
}

interface IPopularItem {
  rank: number
  search: string
  change: string
}
