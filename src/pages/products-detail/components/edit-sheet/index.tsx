import { sheet } from '@/store/sheet-slice'

import { useDispatch } from 'react-redux'

import * as S from './EditSheet.styles'

const ACTION = ['수정', '삭제'] as const

function EditSheet() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(sheet({ name: 'edit-sheet', status: false }))
  }

  return (
    <>
      <S.SheetBackground
        onClick={() => dispatch(sheet({ name: 'edit-sheet', status: false }))}
      />
      <S.Container>
        <S.GrabHandle />
        {ACTION.map((action, idx) => (
          <S.OrderWrapper onClick={handleClick} key={action}>
            <S.Order>{action}</S.Order>
            {idx !== ACTION.length - 1 && <S.Divider />}
          </S.OrderWrapper>
        ))}
      </S.Container>
    </>
  )
}

export default EditSheet
