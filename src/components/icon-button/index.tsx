import * as S from './IconButton.style'

import type { IIconButton } from './IconButton.type'

/**
 *
 * @ref https://github.com/travelly-8/travelly-fe/issues/4
 */
const IconButton = ({ imgSrc, children, onClick, buttonType }: IIconButton) => {
  const text = buttonType === 'selected' ? `${children} >` : children
  return (
    <S.Wrapper buttonType={buttonType} onClick={onClick}>
      <S.Icon src={imgSrc} alt="아이콘" />
      <S.Text buttonType={buttonType}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default IconButton
