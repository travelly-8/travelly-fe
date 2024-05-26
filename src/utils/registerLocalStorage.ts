export function registerRecentSearches(search: string) {
  const recentSearches = JSON.parse(
    localStorage.getItem('recentSearches') || '[]',
  )
  const index = recentSearches.indexOf(search)
  const isExist = index !== -1
  if (!isExist) {
    recentSearches.unshift(search)
    const updatedSearches = recentSearches.slice(0, 10)
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
  } else {
    recentSearches.splice(index, 1)
    recentSearches.unshift(search)
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
  }
}
