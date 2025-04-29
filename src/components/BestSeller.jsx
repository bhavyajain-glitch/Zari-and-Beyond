import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [])

  return (
    <div className="my-16 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12 font-body">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-full sm:w-3/5 m-auto text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
          A celebration of craftsmanship and elegance—our most adored designs, perfected in every stitch.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 font-body">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
