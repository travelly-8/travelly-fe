import * as S from './SortOrdersSheet.style'

const ORDER = ['최신순', '리뷰 많은 순', '평점순', '낮은 가격순'] as const

function SortOrdersSheet() {
  return (
    <>
      <S.SheetBackground />
      <S.Container>
        <S.GrabHandle />
        {ORDER.map((order, idx) => (
          <S.OrderWrapper key={order}>
            <S.Order>{order}</S.Order>
            {idx !== ORDER.length - 1 && <S.Divider />}
          </S.OrderWrapper>
        ))}
      </S.Container>
    </>
  )
}

export default SortOrdersSheet
