import calendarIcon from '@/assets/mypage/calendar.svg'
import reviewIcon from '@/assets/mypage/review.svg'
import walletIcon from '@/assets/mypage/wallet.svg'
import { formatWithCommas } from '@/utils/formatWIthCommas'

import * as S from './Dashboard.style'

interface IDashboard {
  icon: string
  title: string
  value: number
}

const Dashboard = () => {
  const currUser = 'Traveler' // TODO: 로그인한 유저 유형에 따라 변경
  const USER_MAP = {
    Traveler: ['point', 'writeReview', 'booking'],
    Travelly: ['point', 'getReview', 'getReservation'],
  }
  const MENU_MAP: Record<string, IDashboard> = {
    point: {
      icon: walletIcon,
      title: '포인트',
      value: 1000,
    },
    getReview: {
      icon: reviewIcon,
      title: '받은 리뷰',
      value: 1000,
    },
    writeReview: {
      icon: reviewIcon,
      title: '리뷰',
      value: 1000,
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
        {USER_MAP[currUser].map((menu) => {
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
