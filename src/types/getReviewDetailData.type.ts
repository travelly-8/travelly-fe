export interface IGetReviewDetailResponse {
  data: IReviewDetailData
}

export interface ICommentData {
  commentId: number
  commentUserImage: string
  commentUserNickname: string
  commentDate: string
  commentContent: string
  childrenComments?: ICommentData[]
}

export interface IReviewDetailData {
  productId: number
  productName: string
  productPrice: number
  reviewId: number
  reviewUserImage: string
  reviewUserNickname: string
  reviewImages: string[]
  reviewContent: string
  rating: number
  reviewDate: string
  likeCount: number
  comments: ICommentData[]
}
