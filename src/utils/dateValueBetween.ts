function dateValueBetween(dateValue: string, startDay: string, endDay: string) {
  const registerDate = new Date(dateValue)
  const startDate = new Date(startDay)
  const endDate = new Date(endDay)
  registerDate.setHours(0, 0, 0, 0)
  startDate.setHours(0, 0, 0, 0)
  endDate.setHours(0, 0, 0, 0)

  return registerDate >= startDate && registerDate <= endDate
}

export default dateValueBetween
