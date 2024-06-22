import { REVIEW_SORT } from '@/constants/FILTERING_BROWSING'

import GrabSheet from '@components/grab-sheet'

import * as S from './ReviewOrderSheet.style'
import { IReviewOrderSheet } from './ReviewOrderSheet.type'

const orderKeys = Object.keys(REVIEW_SORT) as Array<keyof typeof REVIEW_SORT>

function ReviewOrderSheet({ handleSort }: IReviewOrderSheet) {
  return (
    <GrabSheet name="review-order-sheet">
      {orderKeys.map((order, idx) => (
        <S.OrderWrapper
          key={order}
          onClick={() => handleSort(REVIEW_SORT[order])}
        >
          <S.Order>{order}</S.Order>
          {idx !== orderKeys.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default ReviewOrderSheet
