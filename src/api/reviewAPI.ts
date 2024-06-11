import instance from './instance'

interface IReviewRequest {
  images: File[] // Multipartfile로 전송할 파일 배열
  review: {
    rating: number
    content: string
  }
}

const API_REVIEW = {
  POST_REVIEW: (productId: number) => `/review/${productId}`,
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
