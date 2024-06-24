import { getReviewDetail, updateReview } from '@/api/reviewAPI'
import * as S from '@/pages/review/write/ReviewWritePage.style'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import FooterButton from '@components/footer-button'
import PageHeader from '@components/page-header'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from '../components/rating'

export default function ReviewEditPage() {
  const { productId, reviewId } = useParams()
  const parsedProductId = productId ? Number(productId) : 0
  const parsedReviewId = reviewId ? Number(reviewId) : 0
  const navigate = useNavigate()
  const formData = useRef(new FormData())

  const [rating, setRating] = useState<number>(0)
  const [originReview, setOriginReview] = useState<IReviewDetailData>()
  const [content, setContent] = useState<string>('')
  const [numOfText, setNumOfText] = useState<number>(0)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      getOriginReview()
    }
  }, [])

  const getOriginReview = async () => {
    const res = await getReviewDetail(parsedProductId, parsedReviewId)
    const data = res.data
    setOriginReview(data)
  }

  useEffect(() => {
    if (originReview) {
      setContent(originReview.reviewContent)
      setNumOfText(originReview.reviewContent.length)
      setRating(originReview.rating)
    }
  }, [originReview])

  const mutation = useMutation({
    mutationFn: (data: FormData) => updateReview(parsedReviewId, data),
  })

  const handleSubmit = () => {
    const reviewData = {
      rating,
      content,
    }

    formData.current.append('images', '')

    formData.current.append(
      'review',
      new Blob([JSON.stringify(reviewData)], { type: 'application/json' }),
    )

    mutation.mutate(formData.current, {
      onSuccess: () => {
        alert('리뷰가 성공적으로 수정되었습니다!')
        navigate(`/products/${productId}`)
      },
      onError: (error) => alert(error),
      onSettled: (data) => alert(data),
    })
  }

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>후기 수정</S.HeaderTitle>
      </PageHeader>
      <S.Wrapper>
        <S.RatingWrapper>
          <S.Title>별점</S.Title>
          <Rating
            score={rating}
            onChange={(value: number) => setRating(value)}
          />
        </S.RatingWrapper>
        <S.ReviewWrapper>
          <S.Title>후기 작성</S.Title>
          <S.CommentWrapper>
            <S.Textarea
              placeholder="리뷰 입력하기."
              value={content}
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
        <FooterButton buttonText="수정 완료" onClick={handleSubmit} />
      </S.FooterWrapper>
    </>
  )
}
