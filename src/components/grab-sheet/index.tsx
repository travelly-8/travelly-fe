import { sheet } from '@/store/sheet-slice'

import { useDispatch } from 'react-redux'

import * as S from './GrabSheet.style'
import { ISheetProps } from './GrabSheet.type'

function GrabSheet({ name, children, onClose, direction }: ISheetProps) {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(sheet({ name, status: false }))
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      <S.SheetBackground onClick={handleClose} />
      <S.Container $direction={direction}>
        <S.GrabHandle />
        {children}
      </S.Container>
    </>
  )
}

export default GrabSheet
