import { useEffect, useState } from 'react'

import { getReveiwDetail } from '@/api/reviewAPI'
import ReviewPage from '@/pages/products-detail/components/review/ReviewPage'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { RootState } from '@/store/store'

import BottomSheet from '@components/bottom-sheet'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ReviewDetailPage.style'

export default function ReviewDetailPage() {
  const [numOfComments, setNumOfComments] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const productDetail = useSelector((state: RootState) => state.product.detail)

  const { data: reviewData, isFetched } = useQuery({
    queryKey: ['review-detail'],
    queryFn: () => getReveiwDetail(4, 1),
  })

  useEffect(() => {
    isFetched && setNumOfComments(reviewData?.data.comments.length)
  }, [isFetched])

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 상세</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard productDetail={productDetail} />
        {reviewData && (
          <ReviewPage
            reviewData={reviewData}
            onEditClick={() => {}}
            canComment={false}
          />
        )}
      </S.Wrapper>
      <S.CommentWrapper>
        <S.TitleWrapper>
          <S.Title>댓글</S.Title>
          <S.NumOfComments numOfComments={numOfComments}>
            {numOfComments}
          </S.NumOfComments>
        </S.TitleWrapper>
        {/* <div>
          {dummyComment.map((data) => {
            return (
              <div key={data.commentId}>
                <CommentCard data={data} />
              </div>
            )
          })}
        </div> */}
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
