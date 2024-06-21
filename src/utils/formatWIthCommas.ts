export const formatWithCommas = (num: number) => {
  if (!num && num !== 0) return
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
