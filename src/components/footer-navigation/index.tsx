import { FNB_TRAVELLER } from '@/constants/NAVIGATE_BUTTON'

import NavigateButton from '@components/navigate-button'
import { useLocation } from 'react-router-dom'

import * as S from './FooterNavigation.style'

//TODO: 회원에 따라(판매자, 구매자) FNB가 다르게 보이는 기능
//TODO: 임시 키

function FooterNavigation() {
  const location = useLocation()

  return (
    <S.Container>
      {FNB_TRAVELLER.map(({ img, description, url }) => (
        <NavigateButton
          key={img}
          img={img}
          description={description}
          url={url}
          isButtonActive={location.pathname === url}
        />
      ))}
    </S.Container>
  )
}

export default FooterNavigation
