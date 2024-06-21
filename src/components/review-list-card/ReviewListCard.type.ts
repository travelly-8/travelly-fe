interface IReviewListCardProps {
  id: number | undefined
  productName: string | undefined
  productImages: IImage[]
  buyerName: string | undefined
  date: string | undefined
  totalPrice: number | undefined
}

type StatusType = 'PENDING' | 'REJECTED' | 'ACCEPTED' | 'CANCELLED' | 'EXPIRED'

interface IImage {
  url: string
  order: number
}
