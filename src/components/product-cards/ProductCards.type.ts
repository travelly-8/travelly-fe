export interface IProductCardsProps {
  cardData: IProductCardsData
  size: 'sm' | 'bg'
} //TODO: 'sm' 아니면 'bg'로 받거나 true, false값을 주어도 될 것 같습니다. 향후 수정 필요

export interface IProductCardsData {
  image: string
  name: string
  city: string
  district: string
  discount: number
  price: string
  reviewPoint: number
  reviewCount: number
} //TODO: 임시 타입. api 연결 후 수정 필요
