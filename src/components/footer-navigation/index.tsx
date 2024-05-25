import { FNB_TRAVELLER } from '@/constants/NAVIGATE_BUTTON'

import NavigateButton from '@components/navigate-button'

import * as S from './FooterNavigation.style'

//TODO: 회원에 따라(판매자, 구매자) FNB가 다르게 보이는 기능
//TODO: 페이지 이동 시, svg의 stroke가 #5849FF로 변경 되도록
function FooterNavigation() {
  return (
    <S.Container>
      {FNB_TRAVELLER.map(({ img, description, url }) => (
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
