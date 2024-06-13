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

  return (
    <S.Container>
      {role
        ? MENU_MAP[role].map(({ img, description, url }) => (
            <NavigateButton
              key={img}
              img={img}
              description={description}
              url={url}
              isButtonActive={location.pathname === url}
            />
          ))
        : FNB_GUEST.map(({ img, description, url }) => (
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
