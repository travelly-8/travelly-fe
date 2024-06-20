export interface IPostReview {
  images: File[]
  review: {
    rating: number
    content: string
  }
}

export interface IGetReviews {
  page: number
  size: number
  sort: string
}
