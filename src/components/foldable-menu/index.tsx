import { useState } from 'react'

import * as S from './FoldableMenu.style.tsx'

import type { IFoldableMenu } from './FoldableMenu.type.ts'

const FoldableMenu = ({ attribute, children, selected }: IFoldableMenu) => {
  const foldIcon = '/src/assets/browsing/arrow-up.svg'
  const unfoldIcon = '/src/assets/browsing/arrow-down.svg'

  const [isFolded, setIsFolded] = useState(true)

  return (
    <S.Wrapper>
      <S.Attribute>
        <S.Text $selected={selected}>{attribute}</S.Text>
        <S.Icon
          src={isFolded ? unfoldIcon : foldIcon}
          onClick={() => setIsFolded((prev) => !prev)}
          $selected={selected}
        />
      </S.Attribute>
      {isFolded ? <></> : <S.Value>{children}</S.Value>}
    </S.Wrapper>
  )
}
export default FoldableMenu
