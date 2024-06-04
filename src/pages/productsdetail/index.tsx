import { useState } from 'react'

import ProductHeader from '@components/product-header'

import Info from './components/info'

const ProductsDetail = () => {
  const [isKebabClicked, setIsKebabClicked] = useState(false)

  return (
    <>
      <ProductHeader kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <Info />
    </>
  )
}

export default ProductsDetail
