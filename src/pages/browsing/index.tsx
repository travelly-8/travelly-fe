import { mockData } from '@/constants/MOCK_DATA'

import ProductCards from '@components/product-cards'

function BrowsingPage() {
  return (
    <>
      {mockData.map((cardData) => (
        <ProductCards key={cardData.name} cardData={cardData} size="sm" />
      ))}
    </>
  )
}

export default BrowsingPage
