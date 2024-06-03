import { ReactNode, useEffect, useState } from 'react'

import barSvg from '@/assets/common/bar.svg'

import * as S from './BottomSheet.style'

interface IBottomSheet {
  children: ReactNode
  onClick?: () => void
}

const BottomSheet = ({ children, onClick }: IBottomSheet) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleSheet = (e: React.MouseEvent) => {
    e.target === e.currentTarget && onClick && onClick()
  }

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  })
  return (
    <S.Background onClick={(e) => handleSheet(e)}>
      <S.Wrapper isVisible={isVisible}>
        <S.BarIcon src={barSvg} alt="시트" />
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Background>
  )
}
export default BottomSheet
