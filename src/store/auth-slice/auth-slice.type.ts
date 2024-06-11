import { UserRoleType } from '@/types/userRole.type'

export interface IAuthState {
  nickname: string
  role: UserRoleType
}
