// src/pages/review/ReviewList.tsx
import ReviewProductCard from '@/pages/review/components/review-product-card'
import { RootState } from '@/store/store'
import PageHeader from '@components/page-header'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './ReviewList.style'

const ReviewList: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role)
  const defaultTab = role === 'travelly' ? '받은 후기' : '후기'
  const [activeTab, setActiveTab] = useState(defaultTab)

  const renderTabs = () => {
    if (role === 'traveller') {
      return (
        <>
          <S.Tab
            className={activeTab === '후기' ? 'active' : ''}
            onClick={() => setActiveTab('후기')}
          >
            후기
          </S.Tab>
          <S.Tab
            className={activeTab === '작성한 후기' ? 'active' : ''}
            onClick={() => setActiveTab('작성한 후기')}
          >
            작성한 후기
          </S.Tab>
          <S.Tab
            className={activeTab === '댓글' ? 'active' : ''}
            onClick={() => setActiveTab('댓글')}
          >
            댓글
          </S.Tab>
        </>
      )
    } else {
      return (
        <>
          <S.Tab
            className={activeTab === '받은 후기' ? 'active' : ''}
            onClick={() => setActiveTab('받은 후기')}
          >
            받은 후기
          </S.Tab>
          <S.Tab
            className={activeTab === '작성한 댓글' ? 'active' : ''}
            onClick={() => setActiveTab('작성한 댓글')}
          >
            작성한 댓글
          </S.Tab>
        </>
      )
    }
  }

  return (
    <S.Container>
      <PageHeader>
        <S.HeaderTitle>후기</S.HeaderTitle>
      </PageHeader>
      <S.ProfileSection>
        <S.ProfileImg
          src="https://via.placeholder.com/50"
          alt="프로필 이미지"
        />
        <S.ProfileInfo>
          <S.Nickname>닉네임</S.Nickname>
          <S.Email>travelly@gmail.com</S.Email>
        </S.ProfileInfo>
      </S.ProfileSection>
      <S.BodyContainer>
        <S.Tabs>{renderTabs()}</S.Tabs>
        <S.CardContainer>
          {activeTab === '받은 후기' && (
            <>
              <ReviewProductCard />
              <ReviewProductCard />
              <ReviewProductCard />
            </>
          )}
          {activeTab === '작성한 댓글' && (
            <>
              <ReviewProductCard isCommentMode />
              <ReviewProductCard isCommentMode />
              <ReviewProductCard isCommentMode />
            </>
          )}
          {activeTab === '후기' && (
            <>
              <ReviewProductCard />
              <ReviewProductCard />
              <ReviewProductCard />
            </>
          )}
          {activeTab === '작성한 후기' && (
            <>
              <ReviewProductCard />
              <ReviewProductCard />
              <ReviewProductCard />
            </>
          )}
          {activeTab === '댓글' && (
            <>
              <ReviewProductCard isCommentMode />
              <ReviewProductCard isCommentMode />
              <ReviewProductCard isCommentMode />
            </>
          )}
        </S.CardContainer>
      </S.BodyContainer>
    </S.Container>
  )
}

export default ReviewList
