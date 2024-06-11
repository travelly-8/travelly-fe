import { getMemberProfile } from '@/api/myAPI'
import { API_MEMBER } from '@/constants/API'
import { TABS } from '@/constants/REVIEW'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile'
import ReviewProductCard from '@/pages/review/components/review-product-card'
import { RootState } from '@/store/store'
import PageHeader from '@components/page-header'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './ReviewList.style'
import type { IProductDetail } from './ReviewList.type'

const CARDS = (productDetail: IProductDetail) => ({
  후기: [
    <ReviewProductCard key={1} productDetail={productDetail} />,
    <ReviewProductCard key={2} productDetail={productDetail} />,
    <ReviewProductCard key={3} productDetail={productDetail} />,
  ],
  '작성한 후기': [
    <ReviewProductCard key={4} productDetail={productDetail} />,
    <ReviewProductCard key={5} productDetail={productDetail} />,
    <ReviewProductCard key={6} productDetail={productDetail} />,
  ],
  댓글: [
    <ReviewProductCard key={7} productDetail={productDetail} isCommentMode />,
    <ReviewProductCard key={8} productDetail={productDetail} isCommentMode />,
    <ReviewProductCard key={9} productDetail={productDetail} isCommentMode />,
  ],
  '받은 후기': [
    <ReviewProductCard key={10} productDetail={productDetail} />,
    <ReviewProductCard key={11} productDetail={productDetail} />,
    <ReviewProductCard key={12} productDetail={productDetail} />,
  ],
  '작성한 댓글': [
    <ReviewProductCard key={13} productDetail={productDetail} isCommentMode />,
    <ReviewProductCard key={14} productDetail={productDetail} isCommentMode />,
    <ReviewProductCard key={15} productDetail={productDetail} isCommentMode />,
  ],
})

const ReviewList: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role)
  const productDetail = useSelector(
    (state: RootState) => state.product.detail,
  ) as IProductDetail
  const defaultTab = role === 'travelly' ? '받은 후기' : '후기'
  const [activeTab, setActiveTab] = useState(defaultTab)

  const {
    data: profile,
    refetch,
    status,
  } = useGetMemberProfile(API_MEMBER.MY_PROFILE, () => getMemberProfile())

  const renderTabs = () => {
    return TABS[role as keyof typeof TABS].map((tab: string) => (
      <S.Tab
        key={tab}
        className={activeTab === tab ? 'active' : ''}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </S.Tab>
    ))
  }

  const renderCards = () => {
    return (
      CARDS(productDetail)[activeTab as keyof ReturnType<typeof CARDS>] || []
    )
  }

  return (
    <S.Container>
      <PageHeader>
        <S.HeaderTitle>후기</S.HeaderTitle>
      </PageHeader>
      <S.ProfileSection>
        <S.ProfileImg
          src={profile?.imageUrl || 'https://via.placeholder.com/50'}
          alt="프로필 이미지"
        />
        <S.ProfileInfo>
          <S.Nickname>{profile?.nickname || '닉네임'}</S.Nickname>
          <S.Email>{profile?.email || 'travelly@gmail.com'}</S.Email>
        </S.ProfileInfo>
      </S.ProfileSection>
      <S.BodyContainer>
        <S.Tabs>{renderTabs()}</S.Tabs>
        <S.CardContainer>{renderCards()}</S.CardContainer>
      </S.BodyContainer>
    </S.Container>
  )
}

export default ReviewList
