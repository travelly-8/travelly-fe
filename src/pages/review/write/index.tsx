import { useEffect, useRef, useState } from 'react'

import { postReview } from '@/api/reviewAPI'
import CameraImg from '@/assets/review/camera.svg'
import Rating from '@/pages/review/components/rating'

import FooterButton from '@components/footer-button'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './ReviewWritePage.style'

export default function ReviewWritePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { productDetail } = location.state || {}
  const [numOfPhotos, setNumOfPhotos] = useState(0)
  const [numOfText, setNumOfText] = useState(0)
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')
  const [images, setImages] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (content.length >= 20 && rating > 0) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [content, rating])

  const formData = useRef(new FormData())

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files)
      setImages(fileArray)
      setNumOfPhotos(fileArray.length)

      const files = event.target.files
      for (let i = 0; i < files.length; i++) {
        formData.current.append('images', files[i])
      }
    }
  }

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmit = async () => {
    if (content.length < 20 || rating === 0) {
      alert('리뷰 내용과 별점을 입력해주세요.')
      return
    }

    if (!productDetail) {
      alert('상품 정보가 없습니다.')
      return
    }

    const { id: productId } = productDetail

    const reviewData = {
      rating,
      content,
    }

    formData.current.append(
      'review',
      new Blob([JSON.stringify(reviewData)], { type: 'application/json' }),
    )

    try {
      await postReview(productId, formData.current)
      alert('리뷰가 성공적으로 등록되었습니다.')
      navigate(`/products/${productId}`)
    } catch (error) {
      console.error(error)
      alert('리뷰 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 작성</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        {productDetail && <ReviewProductCard productDetail={productDetail} />}
        <S.RatingWrapper>
          <S.Title>별점</S.Title>
          <Rating onChange={(value: number) => setRating(value)} />
        </S.RatingWrapper>
        <S.ReviewWrapper>
          <S.Title>후기 작성</S.Title>
          <S.CameraWrapper>
            <S.CameraImg
              src={CameraImg}
              alt="사진 등록"
              onClick={handleCameraClick}
            />
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <S.PhotoNum>{numOfPhotos}/1</S.PhotoNum>
          </S.CameraWrapper>
          <S.CommentWrapper>
            <S.Textarea
              placeholder="리뷰 입력하기."
              onChange={(e) => {
                setContent(e.target.value)
                setNumOfText(e.target.value.length)
              }}
            />
            <S.TextLength>{numOfText}/500</S.TextLength>
            <S.TextInfo>최소 20자</S.TextInfo>
          </S.CommentWrapper>
        </S.ReviewWrapper>
      </S.Wrapper>
      <S.FooterWrapper>
        <FooterButton
          buttonText="작성 완료"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        />
      </S.FooterWrapper>
    </>
  )
}
