import { IOperationDays } from '@/types/postProductData.type'

export const getFirstAndLastDates = (arr: IOperationDays[] | undefined) => {
  if (!arr || arr.length === 0) {
    return { firstDate: null, lastDate: null }
  }

  const firstDate = new Date(arr[0].date)
  const lastDate = new Date(arr[arr.length - 1].date)

  return { firstDate, lastDate }
}
