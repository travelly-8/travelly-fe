import { ReactNode } from 'react'

import * as S from './Layout.style'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.BackgroundWrapper>
      <S.Wrapper>{children}</S.Wrapper>
    </S.BackgroundWrapper>
  )
}

export default Layout
