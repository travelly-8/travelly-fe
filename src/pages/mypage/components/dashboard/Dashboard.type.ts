export interface IReviews {
  content: string
  rating: number
  likeCount: number
  imageUrl: string
}

export interface IDashboardProps {
  data: {
    role: string
    coin: number
    reviews: IReviews[]
  }
}

export interface IDashboard {
  icon: string
  title: string
  value: number
}
