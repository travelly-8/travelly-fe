export interface IGetMemberProfileResponse {
  data: IGetMemberProfile
}

export interface IGetMemberProfile {
  email: string
  nickname: string
  imageUrl: string
  type: 'local' | 'social'
  point: number
}

export interface IGetTravellyProfileResponse {
  data: IGetTravellyProfile
}

export interface IGetTravellyProfile {
  nickname: string
  email: string
  imageUrl: string
  point: number
  notResponseCount: 0
  newReservationCount: 0
  products: IProducts[]
}

export interface IProducts {
  id: number
  name: string
  address: string
  detailAddress: string
  images: IImage[]
  price: number
  rating: number
  reviewCount: number
}

export interface IImage {
  url: string
  order: number
}

export interface IGetTravellerProfileResponse {
  data: IGetTravellerProfile
}

export interface IGetTravellerProfile {
  nickname: string
  email: string
  imageUrl: string
  point: number
  remainReviewCount: number
  notPassedReservations: number
  recentProducts: IProducts[]
}

export type ProfileByRoleType = IGetTravellerProfile & IGetTravellyProfile
