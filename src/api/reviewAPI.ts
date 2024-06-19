import { API_REVIEW } from '@/constants/API'
import type { IPostCommentData } from '@/types/postCommentData.type'
import type { IGetReviews, IPostReview } from '@/types/review.type'

import instance from './instance'

export const postReview = (productId: number, data: IPostReview) => {
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

export const getReviewDetail = (productId: number, reviewId: number) => {
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

export const getReviews = (productId: number, params: IGetReviews) => {
  return instance({
    method: 'GET',
    url: API_REVIEW.REVIEWS(productId),
    params,
  })
}
