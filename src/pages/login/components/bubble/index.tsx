import * as S from './Bubble.style.tsx'

import type { IBubbleMap } from './Bubble.type.ts'

const Bubble = ({ bubbleType }: { bubbleType: 'traveller' | 'travelly' }) => {
  const BubbleMap: IBubbleMap = {
    traveller: {
      title: '트래블러란?',
      text: (
        <p>
          상품을 구매하는 <span>구매자</span> 회원입니다.
        </p>
      ),
      icon: 'passport',
      bubbleDirection: 'left',
    },
    travelly: {
      title: '트래블리란?',
      text: (
        <p>
          상품을 판매하는 <span>판매자</span> 회원입니다.
        </p>
      ),
      icon: 'location',
      bubbleDirection: 'right',
    },
  }

  const data = BubbleMap[bubbleType]

  return (
    <S.BubbleWrapper dir={data.bubbleDirection}>
      <S.Bubble
        dir={data.bubbleDirection}
        src={`/src/assets/login/bubble-${data.bubbleDirection}.svg`}
        alt="말풍선"
      />
      <S.BubbleTextWrapper>
        <S.BubbleTitleWrapper>
          <S.Icon src={`/src/assets/login/${data.icon}.png`} alt="트래블러" />
          <h1>{data.title}</h1>
        </S.BubbleTitleWrapper>
        {data.text}
      </S.BubbleTextWrapper>
    </S.BubbleWrapper>
  )
}

export default Bubble
