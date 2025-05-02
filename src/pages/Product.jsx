import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [error, setError] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize('');
      setError('');
      setAddedToCart(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="pt-8 px-4 sm:px-8 lg:px-16 xl:px-24 transition-opacity ease-in duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Images */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-auto lg:overflow-visible">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                onClick={() => setImage(img)}
                className={`w-16 h-20 lg:w-20 lg:h-24 object-cover border rounded-lg cursor-pointer transition ${
                  image === img ? 'border-black scale-105' : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-[500px] object-contain rounded-lg bg-gray-50"
            />
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-3">{productData.name}</h1>
          <div className="flex items-center gap-1 text-yellow-500 mb-4">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <p className="text-xs text-gray-500 pl-2">(122 reviews)</p>
          </div>
          <p className="text-xl font-medium text-gray-900 mb-6">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-600 text-sm leading-6 mb-8">{productData.description}</p>

          {/* Sizes */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3 uppercase tracking-wider">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSize(s)}
                  className={`border px-4 py-2 rounded-sm text-sm transition-all ${
                    size === s
                      ? 'bg-black border-black text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => {
              if (!size) {
                setError('Please select a size before adding to cart.');
              } else {
                addToCart(productData._id, size);
                setError('');
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 2000);
              }
            }}
            className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-all uppercase text-sm tracking-wider mb-2"
          >
            Add to Cart
          </button>

          {addedToCart && <p className="text-green-600 text-sm mt-2">Added to Cart!</p>}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          {/* Extra Info */}
          <div className="space-y-3 text-xs text-gray-500 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <p>100% Original Product</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🚚</span>
              <p>Cash on Delivery Available</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔄</span>
              <p>7-Day Easy Return & Exchange</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description / Reviews Tabs */}
      <div className="mt-20 mb-16">
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 text-sm font-medium border-t border-x border-gray-200 bg-white text-black tracking-wider">
            Description
          </button>
          <button className="px-6 py-3 text-sm text-gray-500 tracking-wider">Reviews (122)</button>
        </div>
        <div className="border border-gray-200 border-t-0 p-6 text-sm text-gray-600 space-y-4 leading-6">
          <p className="font-medium text-gray-800">Product Description</p>
          <p>{productData.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-xl font-light tracking-wide mb-8">You May Also Like</h2>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
