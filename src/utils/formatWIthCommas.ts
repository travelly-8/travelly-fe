export const formatWithCommas = (num: number) => {
  if (!num) return
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
