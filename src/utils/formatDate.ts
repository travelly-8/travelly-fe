import { IOperationDays } from '@/types/postProductData.type'

export const getDateArray = (arr: IOperationDays[] | undefined) => {
  if (!arr || arr.length === 0) {
    return { firstDate: null, lastDate: null }
  }

  const firstDate = new Date(arr[arr.length - 1].date)
  const lastDate = new Date(arr[0].date)
  const allDates = arr.map((item) => new Date(item.date))

  return { firstDate, lastDate, allDates }
}
