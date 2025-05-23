import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [])

  return (
    <div className="my-16 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12 font-body">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-full sm:w-3/5 m-auto text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
          Unveil the season's most exquisite pieces, where Western silhouettes meet intricate embroidered artistry.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 font-body">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
