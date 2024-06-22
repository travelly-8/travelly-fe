import { ReactNode } from 'react'

import backIcon from '@/assets/common/arrow-left.svg'

import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './PageHeader.style'

interface IPageHeader {
  children?: ReactNode
  border?: boolean
}

const PageHeader = ({ children, border = true }: IPageHeader) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isReservationListPage = location.pathname === '/reservation-list'
  const isMyPage = location.pathname === '/mypage'
  const handleClickBack = () => {
    if (isReservationListPage) {
      navigate('/mypage')
    } else if (isMyPage) {
      navigate('/')
    } else {
      navigate(-1)
    }
  }
  return (
    <S.Wrapper $border={border}>
      <S.Icon src={backIcon} alt="창 닫기" onClick={handleClickBack} />
      {children}
    </S.Wrapper>
  )
}

export default PageHeader
