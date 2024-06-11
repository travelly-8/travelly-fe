import { useEffect, useState } from 'react'

import StarGray from '@/assets/common/star-gray.svg'
import StarYellow from '@/assets/common/star-yellow.svg'

import * as S from './Rating.style'
import { IRating } from './Rating.type'

const Rating = ({ readOnly = false, score = 0, onChange }: IRating) => {
  const [rating, setRating] = useState(score)
  const [starElements, setStarElements] = useState<JSX.Element[]>([])
  const [mouseDown, setMouseDown] = useState(false)

  useEffect(() => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<S.Star key={i} readOnly={readOnly} src={StarYellow} />)
      } else {
        stars.push(<S.Star key={i} readOnly={readOnly} src={StarGray} />)
      }
    }
    setStarElements(stars)
  }, [rating, readOnly])

  const changeRating = (score: number) => {
    if (score === 1 && rating === 1) {
      setRating(0)
      onChange(0)
    } else {
      setRating(score)
      onChange(score)
    }
  }

  return (
    <S.Wrapper>
      <S.StarWrapper
        readOnly={readOnly}
        onMouseDown={() => !readOnly && setMouseDown(true)}
        onMouseUp={() => !readOnly && setMouseDown(false)}
      >
        {starElements.map((star, index) => (
          <div
            key={index}
            onClick={() => !readOnly && changeRating(index + 1)}
            onMouseEnter={() =>
              !readOnly && mouseDown && changeRating(index + 1)
            }
          >
            {star}
          </div>
        ))}
      </S.StarWrapper>
      {!readOnly && <S.Number>({rating}/5)</S.Number>}
    </S.Wrapper>
  )
}

export default Rating
