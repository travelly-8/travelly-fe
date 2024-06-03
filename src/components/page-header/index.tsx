import { ReactNode } from 'react'

import backIcon from '@/assets/common/arrow-left.svg'

import { useNavigate } from 'react-router-dom'

import * as S from './PageHeader.style'

const PageHeader = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Icon src={backIcon} alt="창 닫기" onClick={() => navigate(-1)} />
      {children}
    </S.Wrapper>
  )
}

export default PageHeader
