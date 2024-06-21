import { ProfileByRoleType } from '@/types/getMemberData.type'
import { LoginUserRoleType } from '@/types/userRole.type'

export interface IReviews {
  content: string
  rating: number
  likeCount: number
  imageUrl: string
}

export interface IDashboardProps {
  data: ProfileByRoleType
  role: LoginUserRoleType
}

export interface IDashboard {
  icon: string
  title: string
  value: number
}
