import Rating from '@/pages/review/components/rating'
import ReviewProductCard from '@/pages/review/components/review-product-card'

import PageHeader from '@components/page-header'

import * as S from './ReviewWritePage.style'

export default function ReviewWritePage() {
  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 작성</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <ReviewProductCard />
        <S.RatingWrapper>
          <S.Title>별점</S.Title>
          <Rating />
        </S.RatingWrapper>
        <S.Title>후기 내용</S.Title>
      </S.Wrapper>
    </>
  )
}
