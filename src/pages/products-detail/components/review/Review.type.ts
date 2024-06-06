export interface IReviewProps {
  reviewCnt: number
  reviewImg: string[]
  reviewData: IReviewData[]
}

export interface IReviewPageProps {
  reviewData: IReviewData
}

export interface IReviewData {
  image: string[]
  name: string
  profileImage: string
  rating: number
  reviewDay: string
  reviewText: string
  commentCnt: number
  likeCnt: number
}
