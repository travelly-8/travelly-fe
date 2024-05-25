import * as S from './SortOrdersSheet.style'

const ORDER = ['최신순', '리뷰 많은 순', '평점순', '낮은 가격순'] as const

//TODO: open, close 기능 필요
//TODO: 버튼을 눌렀을 때, 정렬 버튼이 Order문구로 바뀌어야 하므로, ORDER 배열을 밖으로 빼서 관리해야할 것 같습니다

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
