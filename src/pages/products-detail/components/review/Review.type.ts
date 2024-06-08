export interface IReviewProps {
  reviewCnt: number
  reviewImg: string[]
  reviewData: IReviewData[]
  onOrderClick: () => void
  onEditClick: () => void
  onPhotoReviewsClick: () => void
}

export interface IReviewPageProps {
  reviewData: IReviewData
  onEditClick: () => void
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
