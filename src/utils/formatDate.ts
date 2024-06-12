import { IOperationDays } from '@/types/postProductData.type'

export const getFirstAndLastDates = (arr: IOperationDays[] | undefined) => {
  if (!arr || arr.length === 0) {
    return { firstDate: null, lastDate: null }
  }

  const firstDate = arr[0].date
  const lastDate = arr[arr.length - 1].date

  return { firstDate, lastDate }
}

export const formatSellingDate = (date: string | null) => {
  if (!date) return '0000.00.00'
  const [year, month, day] = date.split('-')
  return `${year}.${month}.${day}`
}
