export interface IGetMemberProfileResponse {
  data: IGetMemberProfile
}

export interface IGetMemberProfile {
  email: string
  nickname: string
  imageUrl: string
  type: 'local' | 'social'
}
