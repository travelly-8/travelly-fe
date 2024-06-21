import FooterNavigation from '@components/footer-navigation'
import PageHeader from '@components/page-header'

import * as S from './ChatPage.style'

export default function ChatPage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>챗</S.Title>
        </S.Content>
      </PageHeader>
      <p>준비 중입니다</p>
      <S.FooterWrapper>
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
