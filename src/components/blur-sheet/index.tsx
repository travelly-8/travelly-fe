import { ReactNode } from 'react'

import SheetHeader from '@components/sheet-header'

import * as S from './BlurSheet.style'

interface IBlurSheet {
  children: ReactNode
  title?: string
  button?: string
  buttonClick?: () => void
}

const BlurSheet = ({ children, title, buttonClick }: IBlurSheet) => {
  return (
    <S.Wrapper>
      <SheetHeader sheetName="nickname">
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Button onClick={buttonClick}>저장</S.Button>
        </S.Content>
      </SheetHeader>
      <S.Background>
        <div>{children}</div>
      </S.Background>
    </S.Wrapper>
  )
}

export default BlurSheet
