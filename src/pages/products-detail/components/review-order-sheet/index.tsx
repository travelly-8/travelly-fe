import GrabSheet from '@components/grab-sheet'

import * as S from './ReviewOrderSheet.style'

const ORDER = [
  '최신순',
  '별점 높은 순',
  '별점 낮은 순',
  '추천 많은 순',
] as const

function ReviewOrderSheet() {
  return (
    <GrabSheet name="review-order-sheet">
      {ORDER.map((order, idx) => (
        <S.OrderWrapper key={order}>
          <S.Order>{order}</S.Order>
          {idx !== ORDER.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default ReviewOrderSheet
