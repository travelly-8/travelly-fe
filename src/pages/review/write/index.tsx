import { useState } from 'react'

import CameraImg from '@/assets/review/camera.svg'
import Rating from '@/pages/review/components/rating'
import ReviewProductCard from '@/pages/review/components/review-product-card'

import FooterButton from '@components/footer-button'
import PageHeader from '@components/page-header'

import * as S from './ReviewWritePage.style'

export default function ReviewWritePage() {
  const [numOfPhotos, setNumOfPhotos] = useState(0)
  const [numOfText, setNumOfText] = useState(0)

  // TODO: 상품 상세페이지에서 상품 정보 받아와서 연결
  // TODO: 리뷰 등록 시, 별점과 텍스트는 필수
  // TODO: 리뷰 등록 API 연결
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
        <S.ReviewWrapper>
          <S.Title>후기 작성</S.Title>
          <S.CameraWrapper>
            <S.CameraImg src={CameraImg} alt="사진 등록" />
            <S.PhotoNum>{numOfPhotos}/3</S.PhotoNum>
          </S.CameraWrapper>
          <S.CommentWrapper>
            <S.Textarea
              placeholder="리뷰 입력하기."
              onChange={(e) => setNumOfText(e.target.value.length)}
            />
            <S.TextLength>{numOfText}/500</S.TextLength>
            <S.TextInfo>최소 20자</S.TextInfo>
          </S.CommentWrapper>
        </S.ReviewWrapper>
      </S.Wrapper>
      <S.FooterWrapper>
        <FooterButton buttonText="작성 완료" />
      </S.FooterWrapper>
    </>
  )
}
