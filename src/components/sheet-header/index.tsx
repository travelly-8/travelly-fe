import backIcon from '@/assets/common/arrow-left.svg'

import * as S from './SheetHeader.styles'

import type { ISheetHeader } from '@components/sheet-header/SheetHeader.type.ts'

const SheetHeader = ({ children }: ISheetHeader) => {
  return (
    <S.Wrapper>
      <S.Icon src={backIcon} alt="뒤로 가기" onClick={} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default SheetHeader
