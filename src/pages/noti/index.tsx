import PageHeader from '@components/page-header'

import NotiCard from './noti-card'
import * as S from './NotiPage.style'

export default function NotiPage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>알림</S.Title>
        </S.Content>
      </PageHeader>
      <S.CardWrapper>
        <NotiCard />
      </S.CardWrapper>
    </S.Wrapper>
  )
}
