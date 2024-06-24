import { useEffect, useState } from 'react'

import { getTravellyReview } from '@/api/myAPI'
import { API_MEMBER } from '@/constants/API'
import { TABS } from '@/constants/REVIEW'
import useGetReview from '@/hooks/api/memberAPI/useGetReview'
import { RootState } from '@/store/store'

import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './ReviewList.style'

const ReviewList: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role)
  const location = useLocation()
  const { productDetail } = location.state || {}
  const defaultTab = role === 'travelly' ? '받은 후기' : '후기'
  const reviewEndpoint =
    role === 'travelly'
      ? API_MEMBER.MY_TRAVELLY_REVIEW
      : API_MEMBER.MY_TRAVELLER_REVIEW
  const { data, isLoading, status } = useGetReview(
    reviewEndpoint,
    getTravellyReview,
  )

  const [activeTab, setActiveTab] = useState(defaultTab)
  const [displayData, setDisplayData] = useState<any>(null)

  useEffect(() => {
    if (!data) return
    switch (activeTab) {
      case '받은 후기':
        setDisplayData(data?.reviewWithProducts)
        break
      case '작성한 댓글 ':
        setDisplayData(data?.commentWithProducts)
        break
      default:
        setDisplayData(null)
    }
  }, [data, activeTab])

  const renderTabs = () => {
    return TABS[role as keyof typeof TABS]?.map((tab: string) => (
      <S.Tab
        key={tab}
        className={activeTab === tab ? 'active' : ''}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </S.Tab>
    ))
  }

  console.log(displayData)

  const renderCards = () => {
    // TODO: 작성한 댓글 데이터 있을 때 정상적으로 잘 나타나는지 확인 필요
    const COMMENT_LIST = ['댓글', '작성한 댓글']
    const isCommentMode = COMMENT_LIST.includes(activeTab)

    return displayData?.map((product: any) => {
      return (
        <ReviewProductCard
          key={product.productId}
          productDetail={product}
          isCommentMode={isCommentMode}
        />
      )
    })
  }

  return (
    <S.Container>
      <PageHeader>
        <S.HeaderTitle>후기</S.HeaderTitle>
      </PageHeader>
      준비 중
      {/* <S.ProfileSection>
        {status === 'pending' ? (
          <>
            <SkeletonCircle />
            <S.ProfileInfo>
              <SkeletonText style={{ width: '10rem' }} />
              <SkeletonText style={{ width: '15rem' }} />
            </S.ProfileInfo>
          </>
        ) : (
          <>
            <S.ProfileImg src={data?.imageUrl} alt="프로필 이미지" />
            <S.ProfileInfo>
              <S.Nickname>{data?.nickname}</S.Nickname>
              <S.Email>{data?.email}</S.Email>
            </S.ProfileInfo>
          </>
        )}
      </S.ProfileSection>
      <S.BodyContainer>
        <S.Tabs>{renderTabs()}</S.Tabs>
        <S.CardContainer>{displayData && renderCards()}</S.CardContainer>
      </S.BodyContainer> */}
    </S.Container>
  )
}

export default ReviewList
