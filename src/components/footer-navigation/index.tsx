import {
  FNB_GUEST,
  FNB_TRAVELLER,
  FNB_TRAVELLY,
  IMenu,
} from '@/constants/NAVIGATE_BUTTON'
import { RootState } from '@/store/store'
import { LoginUserRoleType } from '@/types/userRole.type'

import NavigateButton from '@components/navigate-button'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './FooterNavigation.style'

//TODO: 임시 키

const MENU_MAP: Record<LoginUserRoleType, IMenu[]> = {
  traveller: FNB_TRAVELLER,
  travelly: FNB_TRAVELLY,
}

function FooterNavigation() {
  const location = useLocation()
  const { role } = useSelector((state: RootState) => state.auth)
  const footer = role ? MENU_MAP[role] : FNB_GUEST

  return (
    <S.Container>
      {footer.map(({ img, description, url }) => (
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
