import { IOperationDays } from '@/types/postProductData.type'

export interface IInfoProps {
  productName: string
  sellingDate: IOperationDays[] | undefined
  address: string
  rating: number
  reviewCnt: number
  imageArray: string[]
  onShareClick: () => void
  onReviewClick: () => void
}
