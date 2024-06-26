import { CARD_SORT } from '@/constants/FILTERING_BROWSING'
import { sheet } from '@/store/sheet-slice/sheet-slice'

import GrabSheet from '@components/grab-sheet'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './CardOrdersSheet.style'

function CardOrdersSheet() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const searchParams = new URLSearchParams(location.search)

  const handleClickOrder = (orderKey: keyof typeof CARD_SORT) => {
    const orderValue = CARD_SORT[orderKey]
    searchParams.set('sort', orderValue)
    navigate(`${currentPath}?${searchParams.toString()}`)
    dispatch(sheet({ name: 'card-order-sheet', status: false }))
  }

  const orderKeys = Object.keys(CARD_SORT) as Array<keyof typeof CARD_SORT>

  return (
    <GrabSheet name="card-order-sheet">
      {orderKeys.map((orderKey, idx) => (
        <S.OrderWrapper
          onClick={() => handleClickOrder(orderKey)}
          key={orderKey}
        >
          <S.Order>{orderKey}</S.Order>
          {idx !== orderKeys.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default CardOrdersSheet
