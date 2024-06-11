import { useState } from 'react'

import { getReveiwDetail, postComment } from '@/api/reviewAPI'
import ReviewPage from '@/pages/products-detail/components/review/ReviewPage'
import CommentCard from '@/pages/review/components/comment-card'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { RootState } from '@/store/store'
import { ICommentData } from '@/types/getReviewDetailData.type'

import BottomSheet from '@components/bottom-sheet'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as S from './ReviewDetailPage.style'

export default function ReviewDetailPage() {
  const { data: reviewData, refetch } = useQuery({
    queryKey: ['review-detail'],
    queryFn: () => getReveiwDetail(4, 1),
  })
  const { reviewId } = useParams()
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const productDetail = useSelector((state: RootState) => state.product.detail)

  const [inputValue, setInputValue] = useState('')
  const [commentId, setCommentId] = useState(0) // TODO: 답 댓글일 경우, 해당 부모 댓글 id로 교체 (0: 기본 댓글 , 다른 숫자 : 답 댓글)

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (reviewId === undefined) return

    const data = {
      content: inputValue,
    }

    postComment(+reviewId, commentId, data)
      .then(() => {
        setInputValue('')
        refetch()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 상세</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard productDetail={productDetail} />
        {reviewData && (
          <ReviewPage
            reviewData={reviewData.data}
            onEditClick={() => {}}
            canComment={false}
          />
        )}
      </S.Wrapper>
      <S.CommentWrapper>
        <S.TitleWrapper>
          <S.Title>댓글</S.Title>
          <S.NumOfComments numOfComments={reviewData?.data.comments.length}>
            {reviewData?.data.comments.length}
          </S.NumOfComments>
        </S.TitleWrapper>
        <div>
          {reviewData?.data.comments.map((data: ICommentData) => {
            return (
              <div key={data.commentId}>
                <CommentCard data={data} />
              </div>
            )
          })}
        </div>
        <S.InputOuterWrapper numOfComments={reviewData?.data.comments.length}>
          <S.InputWrapper inputValue={inputValue} onSubmit={handleComment}>
            <input
              type="text"
              placeholder="댓글을 입력해주세요."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button type="submit">등록</button>
          </S.InputWrapper>
        </S.InputOuterWrapper>
      </S.CommentWrapper>
      {sheetReducer.status && sheetReducer.name === 'editAndDelete' && (
        <BottomSheet
          onClick={() =>
            dispatch(sheet({ name: 'editAndDelete', status: false }))
          }
        >
          <S.SheetTextWraeppr idx={1}>
            <S.SheetText>수정</S.SheetText>
          </S.SheetTextWraeppr>
          <S.SheetTextWraeppr idx={2}>
            <S.SheetText>삭제</S.SheetText>
          </S.SheetTextWraeppr>
        </BottomSheet>
      )}
    </>
  )
}
