import calendarIcon from '@/assets/mypage/calendar.svg'
import reviewIcon from '@/assets/mypage/review.svg'
import walletIcon from '@/assets/mypage/wallet.svg'
import { formatWithCommas } from '@/utils/formatWIthCommas'

import * as S from './Dashboard.style'
import { IDashboard, IDashboardProps } from './Dashboard.type'

const Dashboard = ({ data, role }: IDashboardProps) => {
  const USER_MAP: Record<string, string[]> = {
    traveller: ['point', 'writeReview', 'booking'],
    travelly: ['point', 'getReview', 'getReservation'],
  }
  console.log(data)
  const MENU_MAP: Record<string, IDashboard> = {
    point: {
      icon: walletIcon,
      title: '포인트',
      value: data.point,
    },
    getReview: {
      icon: reviewIcon,
      title: '받은 리뷰',
      value: data.notResponseCount,
    },
    writeReview: {
      icon: reviewIcon,
      title: '리뷰',
      value: data.remainReviewCount,
    },
    getReservation: {
      icon: calendarIcon,
      title: '예약 관리',
      value: data.newReservationCount,
    },
    booking: {
      icon: calendarIcon,
      title: '예약',
      value: data.notPassedReservations,
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
