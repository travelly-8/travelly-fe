import {
  ICommentData,
  IReviewDetailData,
} from '@/types/getReviewDetailData.type'

export const changeReviewData = (
  reviews: IReviewDetailData[],
  productId: string,
  name: string,
  price: number,
): IReviewDetailData[] => {
  return reviews.map((reviewItem: IReviewDetailData) => ({
    productId: productId,
    productName: name,
    productPrice: price,
    reviewId: reviewItem.reviewId,
    reviewImages: reviewItem.reviewImages,
    reviewUserNickname: reviewItem.reviewUserNickname,
    reviewUserImage: reviewItem.reviewUserImage,
    rating: reviewItem.rating,
    reviewDate: reviewItem.reviewDate,
    reviewContent: reviewItem.reviewContent,
    comments: reviewItem.comments as ICommentData[],
    likeCount: reviewItem.likeCount,
  }))
}
