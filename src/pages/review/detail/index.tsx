import { useState } from 'react'

import CommentCard from '@/pages/review/components/comment-card'
import ReviewProductCard from '@/pages/review/components/review-product-card'
import { SheetSliceState, sheet } from '@/store/sheet-slice'

import BottomSheet from '@components/bottom-sheet'
import PageHeader from '@components/page-header'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ReviewDetailPage.style'
// eslint-disable-next-line import/order
import dummyComment from './dummyData.json'

export default function ReviewDetailPage() {
  const [numOfComments, setNumOfComments] = useState(dummyComment.length)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 상세</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard />
        {/* TODO: 스쿼드 B에서 작업한 부분 연결 (상품 상세 후기 레이아웃) */}
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
