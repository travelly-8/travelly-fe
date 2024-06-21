import FireImg from '@/assets/common/fire.png'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import * as S from './ErrorPage.style'

export default function Error500Page() {
  return (
    <S.Wrapper>
      <PageHeader />
      <S.Content>
        <img src={FireImg} />
        <h1>error 500</h1>
        <h2>서버 에러가 발생했습나다.</h2>
      </S.Content>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
