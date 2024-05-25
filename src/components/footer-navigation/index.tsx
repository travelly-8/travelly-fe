import { FNB_TRAVELER } from '@/constants/NAVIGATE_BUTTON'

import NavigateButton from '@components/navigate-button'

import * as S from './FooterNavigation.style'

function FooterNavigation() {
  return (
    <S.Container>
      {FNB_TRAVELER.map(({ img, description, url }) => (
        <NavigateButton
          key={url}
          img={img}
          description={description}
          url={url}
        />
      ))}
    </S.Container>
  )
}

export default FooterNavigation
