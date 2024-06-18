export interface IProductCreateForm {
  companyName: string
  productName: string
  price: string
  contact: string
  homepageUrl: string
  address: string
  date: string
  photo: string
  description: string
}

export type ErrorMessageType = string | undefined
