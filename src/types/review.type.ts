export interface IPostReview {
  images: string[]
  review: {
    content: string
    rating: number
  }
}

export interface IGetReviews {
  page: number
  size: number
  sort: string
}
