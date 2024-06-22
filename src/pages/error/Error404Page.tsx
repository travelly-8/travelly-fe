import FireImg from '@/assets/common/fire.png'

import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import * as S from './ErrorPage.style'

export default function Error404Page() {
  return (
    <S.Wrapper>
      <PageHeader />
      <S.Content>
        <img src={FireImg} />
        <h1>error 404</h1>
        <h2>존재하지 않는 페이지입니다.</h2>
      </S.Content>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
