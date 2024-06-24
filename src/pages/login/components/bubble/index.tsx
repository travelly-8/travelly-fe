import BubbleLeft from '@/assets/login/bubble-left.svg'
import BubbleRight from '@/assets/login/bubble-right.svg'
import LocationIcon from '@/assets/login/location.png'
import PassportIcon from '@/assets/login/passport.png'

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
      icon: PassportIcon,
      bubbleIcon: BubbleLeft,
      bubbleDirection: 'left',
    },
    travelly: {
      title: '트래블리란?',
      text: (
        <p>
          상품을 판매하는 <span>판매자</span> 회원입니다.
        </p>
      ),
      icon: LocationIcon,
      bubbleIcon: BubbleRight,
      bubbleDirection: 'right',
    },
  }

  const data = BubbleMap[bubbleType]

  return (
    <S.BubbleWrapper dir={data.bubbleDirection}>
      <S.Bubble dir={data.bubbleDirection} src={data.bubbleIcon} alt="말풍선" />
      <S.BubbleTextWrapper>
        <S.BubbleTitleWrapper>
          <S.Icon src={data.icon} alt="트래블러" />
          <h1>{data.title}</h1>
        </S.BubbleTitleWrapper>
        {data.text}
      </S.BubbleTextWrapper>
    </S.BubbleWrapper>
  )
}

export default Bubble
