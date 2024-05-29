import { mockData } from '@/constants/MOCK_DATA'

import ProductCard from '@components/product-card'

function BrowsingPage() {
  return (
    <>
      {mockData.map((cardData) => (
        <ProductCard key={cardData.name} cardData={cardData} size="sm" />
      ))}
    </>
  )
}

export default BrowsingPage
