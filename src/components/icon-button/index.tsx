import * as S from './IconButton.style'
import { IIconButton } from './IconButton.type'

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
