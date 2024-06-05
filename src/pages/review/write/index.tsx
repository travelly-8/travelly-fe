import ReviewProductCard from '@/pages/review/components/review-product-card'

import PageHeader from '@components/page-header'

import * as S from './ReviewWritePage.style'

export default function ReviewWritePage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.HeaderTitle>리뷰 작성</S.HeaderTitle>
      </PageHeader>
      <ReviewProductCard />
    </S.Wrapper>
  )
}
