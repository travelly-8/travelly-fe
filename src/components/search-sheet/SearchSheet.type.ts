export interface IPopularSearchProps {
  popularData?: ITopKeyword[]
  time?: string
}

export interface ITopKeyword {
  keyword: string
  currentRank: number
  previousRank: number
  rankChange: number
}
