import { useState } from 'react'

import ReviewProductCard from '@/components/review-product-card'
import { IReviewData } from '@/pages/products-detail/components/review/Review.type'
import ReviewPage from '@/pages/products-detail/components/review/ReviewPage'
import { reviewData } from '@/pages/products-detail/mockData'
import CommentCard from '@/pages/review/components/comment-card'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import BottomSheet from '@components/bottom-sheet'
import PageHeader from '@components/page-header'
import { useDispatch, useSelector } from 'react-redux'

import dummyComment from './dummyData.json'
import * as S from './ReviewDetailPage.style'

// eslint-disable-next-line import/order
import { RootState } from '@/store/store'

export default function ReviewDetailPage() {
  const [numOfComments, setNumOfComments] = useState(dummyComment.length)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const productDetail = useSelector((state: RootState) => state.product.detail)

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 상세</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard productDetail={productDetail} />
        {reviewData.map((data: IReviewData) => (
          <ReviewPage
            key={data.name}
            reviewData={data}
            onEditClick={() => {}}
          />
        ))}
      </S.Wrapper>
      <S.CommentWrapper>
        <S.TitleWrapper>
          <S.Title>댓글</S.Title>
          <S.NumOfComments numOfComments={numOfComments}>
            {numOfComments}
          </S.NumOfComments>
        </S.TitleWrapper>
        <div>
          {dummyComment.map((data) => {
            return (
              <div key={data.commentId}>
                <CommentCard data={data} />
              </div>
            )
          })}
        </div>
        <S.Wrapper>
          <S.InputOuterWrapper numOfComments={numOfComments}>
            <S.InputWrapper inputValue={inputValue}>
              <input
                type="text"
                placeholder="댓글을 입력해주세요."
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button>등록</button>
            </S.InputWrapper>
          </S.InputOuterWrapper>
        </S.Wrapper>
      </S.CommentWrapper>
      {sheetReducer.status && sheetReducer.name === 'editAndDelete' && (
        <BottomSheet
          onClick={() =>
            dispatch(sheet({ name: 'editAndDelete', status: false }))
          }
        >
          <S.SheetTextWrapper idx={1}>
            <S.SheetText>수정</S.SheetText>
          </S.SheetTextWrapper>
          <S.SheetTextWrapper idx={2}>
            <S.SheetText>삭제</S.SheetText>
          </S.SheetTextWrapper>
        </BottomSheet>
      )}
    </>
  )
}
