import * as S from './SortOrders.style'

const ORDER = ['최신순', '리뷰 많은 순', '평점순', '낮은 가격순'] as const

function SortOrders() {
  return (
    <S.Container>
      <S.GrabHandle />
      <S.OrderWrapper>
        {ORDER.map((order, idx) => (
          <>
            <S.Order key={order}>{order}</S.Order>
            {idx !== ORDER.length - 1 && <S.Divider />}
          </>
        ))}
      </S.OrderWrapper>
    </S.Container>
  )
}

export default SortOrders
