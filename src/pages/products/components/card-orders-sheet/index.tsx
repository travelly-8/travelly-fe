import { sheet } from '@/store/sheet-slice'

import GrabSheet from '@components/grab-sheet'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './CardOrdersSheet.style'

const ORDER = ['최신순', '리뷰 많은 순', '평점순', '낮은 가격순'] as const

//TODO: 버튼을 눌렀을 때, 정렬 버튼이 Order문구로 바뀌어야 하므로, ORDER 배열을 밖으로 빼서 관리해야할 것 같습니다

function CardOrdersSheet() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const searchParams = new URLSearchParams(location.search)

  const handleClickOrder = (order: string) => {
    searchParams.set('sort', order)
    navigate(`${currentPath}?${searchParams.toString()}`)
    dispatch(sheet({ name: 'card-order-sheet', status: false }))
  }

  return (
    <GrabSheet name="card-order-sheet">
      {ORDER.map((order, idx) => (
        <S.OrderWrapper onClick={() => handleClickOrder(order)} key={order}>
          <S.Order>{order}</S.Order>
          {idx !== ORDER.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default CardOrdersSheet
