import { IProductCardData } from '@components/product-card/ProductCard.type'

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

export function registerRecentProducts(cardData: IProductCardData) {
  const recentProducts = JSON.parse(
    localStorage.getItem('recentProducts') || '[]',
  )
  const index = recentProducts.findIndex(
    (product: IProductCardData) => product.name === cardData.name,
  )
  const isExist = index !== -1

  const recentProductData: IProductCardData = {
    imageUrl: cardData.imageUrl,
    name: cardData.name,
    cityCode: cardData.cityCode,
    address: cardData.address,
    discount: cardData.discount,
    ticketPrice: cardData.ticketPrice,
    rating: cardData.rating,
    reviewCount: cardData.reviewCount,
  }
  if (isExist) {
    recentProducts.splice(index, 1)
    recentProducts.unshift(recentProductData)
  } else {
    recentProducts.unshift(recentProductData)
  }
  const updatedProducts = recentProducts.slice(0, 10)
  localStorage.setItem('recentProducts', JSON.stringify(updatedProducts))
}
