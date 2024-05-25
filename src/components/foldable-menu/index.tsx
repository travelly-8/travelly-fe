import { useState } from 'react'

import * as S from './FoldableMenu.style.tsx'

import type { IFoldableMenu } from './FoldableMenu.type.ts'

const FoldableMenu = ({ attribute, children }: IFoldableMenu) => {
  const foldIcon = '/src/assets/browsing/arrow-up.svg'
  const unfoldIcon = '/src/assets/browsing/arrow-down.svg'

  const [isFolded, setIsFolded] = useState(true)

  return (
    <S.Wrapper>
      <S.Attribute onClick={() => setIsFolded((prev) => !prev)}>
        <S.Text $selected={!isFolded}>{attribute}</S.Text>
        <S.Icon src={isFolded ? unfoldIcon : foldIcon} $selected={!isFolded} />
      </S.Attribute>
      {isFolded ? <></> : <S.Value>{children}</S.Value>}
    </S.Wrapper>
  )
}
export default FoldableMenu
