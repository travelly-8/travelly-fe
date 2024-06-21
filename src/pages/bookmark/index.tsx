import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import * as S from './BookmarkPage.style'

export default function BookmarkPage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>찜</S.Title>
        </S.Content>
      </PageHeader>
      <p>준비 중입니다</p>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
