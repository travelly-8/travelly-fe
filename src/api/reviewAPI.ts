import { API_REVIEW } from '@/constants/API'
import type { IPostCommentData } from '@/types/postCommentData.type'
import type { IGetReviews } from '@/types/review.type'

import fileInstance from './fileInstance'
import instance from './instance'

export const postReview = (productId: number, data: FormData) => {
  return fileInstance({
    method: 'POST',
    url: API_REVIEW.POST_REVIEW(productId),
    data,
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

export const deleteReview = (reviewId: number) => {
  return instance({
    method: 'DELETE',
    url: API_REVIEW.DELETE_REVIEW(reviewId),
  })
}
