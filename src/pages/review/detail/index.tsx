import { useState } from 'react'

import { getReviewDetail, postComment } from '@/api/reviewAPI'
import ReviewPage from '@/pages/products-detail/components/product-review/review/ReviewPage.tsx'
import CommentCard from '@/pages/review/components/comment-card'
import { comment } from '@/store/comment-slice/comment-slice'
import { ICommentSliceState } from '@/store/comment-slice/comment-slice.type'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { ICommentData } from '@/types/getReviewDetailData.type'

import BottomSheet from '@components/bottom-sheet'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import * as S from './ReviewDetailPage.style'

export default function ReviewDetailPage() {
  const { productId, reviewId } = useParams()
  const location = useLocation()
  const { productDetail, reviewData: reviews } = location.state || {}
  const parsedProductId = productId ? Number(productId) : 0
  const parsedReviewId = reviewId ? Number(reviewId) : 0
  const { data: reviewData, refetch } = useQuery({
    queryKey: ['review-detail'],
    queryFn: () => getReviewDetail(parsedProductId, parsedReviewId),
  })
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )

  const commentReducer = useSelector(
    (state: ICommentSliceState) => state.comment.value,
  )
  const commentId = commentReducer.parentId

  const [inputValue, setInputValue] = useState('')

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!reviewId) return

    const data = {
      content: inputValue,
    }

    postComment(+reviewId, commentId, data)
      .then(() => {
        setInputValue('')
        dispatch(comment({ parentId: 0 }))
        refetch()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const selectedReview = reviews?.find(
    (review: { reviewId: number }) => review.reviewId === Number(reviewId),
  )

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 상세</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard
          productDetail={productDetail}
          isReviewList={true}
          reviewData={selectedReview}
        />
        {reviewData && (
          <ReviewPage
            reviewData={selectedReview}
            onEditClick={() => {}}
            canComment={false}
          />
        )}
      </S.Wrapper>
      <S.CommentWrapper>
        <S.TitleWrapper>
          <S.Title>댓글</S.Title>
          <S.NumOfComments $numOfComments={reviewData?.data.comments.length}>
            {reviewData?.data.comments.length}
          </S.NumOfComments>
        </S.TitleWrapper>
        <S.CommentCardWrapper>
          {reviewData?.data.comments.map((data: ICommentData) => {
            return (
              <div key={data.commentId}>
                <CommentCard data={data} />
              </div>
            )
          })}
        </S.CommentCardWrapper>
        <S.Background>
          <S.InputOuterWrapper
            $numOfComments={reviewData?.data.comments.length}
          >
            <S.InputWrapper $inputValue={inputValue} onSubmit={handleComment}>
              <input
                type="text"
                placeholder="댓글을 입력해주세요."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              <button type="submit">등록</button>
            </S.InputWrapper>
          </S.InputOuterWrapper>
        </S.Background>
      </S.CommentWrapper>
      {sheetReducer.status && sheetReducer.name === 'editAndDelete' && (
        <BottomSheet
          onClick={() =>
            dispatch(sheet({ name: 'editAndDelete', status: false }))
          }
        >
          <S.SheetTextWrapper $idx={1}>
            <S.SheetText>수정</S.SheetText>
          </S.SheetTextWrapper>
          <S.SheetTextWrapper $idx={2}>
            <S.SheetText>삭제</S.SheetText>
          </S.SheetTextWrapper>
        </BottomSheet>
      )}
    </>
  )
}
