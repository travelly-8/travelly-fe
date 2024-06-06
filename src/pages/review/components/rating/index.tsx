import { useEffect, useState } from 'react'

import StarGray from '@/assets/common/star-gray.svg'
import StarYellow from '@/assets/common/star-yellow.svg'

import * as S from './Rating.style'

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [starElements, setStarElements] = useState<JSX.Element[]>([])
  const [mouseDown, setMouseDown] = useState(false)
  const emptyStar = <S.Star src={StarGray} />
  const yellowStar = <S.Star src={StarYellow} />

  useEffect(() => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(yellowStar)
      } else {
        stars.push(emptyStar)
      }
    }
    setStarElements(stars)
  }, [rating])

  const changeRating = (score: number) => {
    if (score === 1 && rating === 1) {
      setRating(0)
    } else {
      setRating(score)
    }
  }

  return (
    <S.Wrapper>
      <S.StarWrapper
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      >
        {starElements.map((star, index) => (
          <div
            key={index}
            onClick={() => changeRating(index + 1)}
            onMouseEnter={() => mouseDown && changeRating(index + 1)}
          >
            {star}
          </div>
        ))}
      </S.StarWrapper>
      <S.Number>({rating}/5)</S.Number>
    </S.Wrapper>
  )
}

export default Rating
