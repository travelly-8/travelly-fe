import calendarIcon from '@/assets/mypage/calendar.svg'
import reviewIcon from '@/assets/mypage/review.svg'
import walletIcon from '@/assets/mypage/wallet.svg'
import { formatWithCommas } from '@/utils/formatWIthCommas'

import * as S from './Dashboard.style'
import { IDashboard, IDashboardProps } from './Dashboard.type'

const Dashboard = ({ data }: IDashboardProps) => {
  const { role, coin, reviews } = data
  const USER_MAP: Record<string, string[]> = {
    traveler: ['point', 'writeReview', 'booking'],
    travelly: ['point', 'getReview', 'getReservation'],
  }
  const MENU_MAP: Record<string, IDashboard> = {
    point: {
      icon: walletIcon,
      title: '포인트',
      value: coin,
    },
    getReview: {
      icon: reviewIcon,
      title: '받은 리뷰',
      value: reviews.length,
    },
    writeReview: {
      icon: reviewIcon,
      title: '리뷰',
      value: reviews.length,
    },
    getReservation: {
      icon: calendarIcon,
      title: '예약 관리',
      value: 1000,
    },
    booking: {
      icon: calendarIcon,
      title: '예약',
      value: 1000,
    },
  }

  return (
    <S.Background>
      <S.Wrapper>
        {USER_MAP[role].map((menu) => {
          return (
            <S.MenuWrapper key={menu}>
              <S.Icon src={MENU_MAP[menu].icon} alt="포인트" />
              <S.DashTitle>{MENU_MAP[menu].title}</S.DashTitle>
              <S.DashNumber>
                {formatWithCommas(MENU_MAP[menu].value)}
              </S.DashNumber>
            </S.MenuWrapper>
          )
        })}
      </S.Wrapper>
    </S.Background>
  )
}

export default Dashboard
