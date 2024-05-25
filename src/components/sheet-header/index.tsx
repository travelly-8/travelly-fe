import backIcon from '@/assets/common/arrow-left.svg'
import { sheet } from '@/store/sheet-slice.ts'

import { useDispatch } from 'react-redux'

import * as S from './SheetHeader.styles'

import type { ISheetHeader } from '@components/sheet-header/SheetHeader.type'

const SheetHeader = ({ children }: ISheetHeader) => {
  const dispatch = useDispatch()
  return (
    <S.Wrapper>
      <S.Icon
        src={backIcon}
        alt="뒤로 가기"
        onClick={() =>
          dispatch(sheet({ name: 'browsing-sheet', status: false }))
        }
      />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default SheetHeader
