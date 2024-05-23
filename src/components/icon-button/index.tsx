import { ReactNode } from 'react'

import * as S from './IconButton.style'

export type ButtonType = 'default' | 'selected' | 'unselected'

//TODO: 인터페이스 파일 분리
interface IconButtonProps {
  imgSrc: string
  children: ReactNode
  onClick?: () => void
  buttonType: ButtonType
}

const IconButton = ({
  imgSrc,
  children,
  onClick,
  buttonType,
}: IconButtonProps) => {
  const text = buttonType === 'selected' ? `${children} >` : children
  return (
    <S.Wrapper buttonType={buttonType} onClick={onClick}>
      <S.Icon src={imgSrc} alt="아이콘" />
      <S.Text buttonType={buttonType}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default IconButton
