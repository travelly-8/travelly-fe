import { API_REVIEW } from '@/constants/API'
import { IPostCommentData } from '@/types/postCommentData.type'

import instance from './instance'

interface IReviewRequest {
  images: File[] // Multipartfile로 전송할 파일 배열
  review: {
    rating: number
    content: string
  }
}

export const postReview = (productId: number, data: IReviewRequest) => {
  const formData = new FormData()

  data.images.forEach((image) => {
    formData.append('images', image)
  })

  formData.append(
    'review',
    new Blob([JSON.stringify(data.review)], { type: 'application/json' }),
  )

  return instance({
    method: 'POST',
    url: API_REVIEW.POST_REVIEW(productId),
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getReveiwDetail = (productId: number, reviewId: number) => {
  return instance({
    method: 'GET',
    url: API_REVIEW.REVIEW_DETAIL(productId, reviewId),
  })
}

export const postComment = (
  reviewId: number,
  commentId: number,
  data: IPostCommentData,
) => {
  return instance({
    method: 'POST',
    url: API_REVIEW.COMMENT(reviewId, commentId),
    data,
  })
}
