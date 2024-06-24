import calendarIcon from '@/assets/mypage/calendar.svg'
import reviewIcon from '@/assets/mypage/review.svg'
import walletIcon from '@/assets/mypage/wallet.svg'
import { formatWithCommas } from '@/utils/formatWIthCommas'

import { useNavigate } from 'react-router-dom'

import * as S from './Dashboard.style'
import { IDashboard, IDashboardProps } from './Dashboard.type'

const Dashboard = ({ data, role }: IDashboardProps) => {
  const navigate = useNavigate()
  const USER_MAP: Record<string, string[]> = {
    traveller: ['point', 'writeReview', 'booking'],
    travelly: ['point', 'getReview', 'getReservation'],
  }

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

  const moveTo = (menu: string) => {
    switch (menu) {
      case 'getReview':
        navigate('/review/list')
        break
      case 'booking':
        navigate('/reservation-list')
        break
    }
  }

  return (
    <S.Background>
      <S.Wrapper>
        {USER_MAP[role].map((menu) => {
          return (
            <S.MenuWrapper key={menu} onClick={() => moveTo(menu)}>
              <S.Icon src={MENU_MAP[menu].icon} alt={MENU_MAP[menu].title} />
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
