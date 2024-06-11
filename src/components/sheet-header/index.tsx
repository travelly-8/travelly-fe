import backIcon from '@/assets/common/arrow-left.svg'
import { sheet } from '@/store/sheet-slice/sheet-slice'

import { useDispatch } from 'react-redux'

import * as S from './SheetHeader.styles'

import type { ISheetHeader } from '@components/sheet-header/SheetHeader.type'

const SheetHeader = ({
  children,
  sheetName = 'browsing-sheet',
}: ISheetHeader) => {
  const dispatch = useDispatch()
  return (
    <S.Wrapper>
      <S.Icon
        src={backIcon}
        alt="창 닫기"
        onClick={() => dispatch(sheet({ name: sheetName, status: false }))}
      />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default SheetHeader
