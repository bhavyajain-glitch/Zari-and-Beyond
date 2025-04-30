import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }

    switch (sortType) {
      case 'low-to-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(filtered);
  }, [category, subCategory, sortType, products]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10 px-4 sm:px-10 border-t min-h-screen bg-white">
      
      {/* Sidebar Filter */}
      <div className="sm:min-w-[220px]">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center justify-between text-lg font-semibold cursor-pointer text-gray-800"
        >
          <span>FILTERS</span>
          <img
            src={assets.dropdown_icon}
            className={`h-3 transform transition-transform sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt="toggle"
          />
        </div>

        <div className={`mt-4 sm:block ${showFilter ? 'block' : 'hidden'}`}>
          
          {/* Category Filter */}
          <div className="border border-gray-200 rounded-md p-4 mb-6 bg-gray-50">
            <p className="font-semibold text-sm mb-3 text-gray-700">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {['Men', 'Women', 'Kids'].map(cat => (
                <label className="flex items-center gap-2" key={cat}>
                  <input type="checkbox" value={cat} onChange={toggleCategory} />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
            <p className="font-semibold text-sm mb-3 text-gray-700">TYPE</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
                <label className="flex items-center gap-2" key={type}>
                  <input type="checkbox" value={type} onChange={toggleSubCategory} />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Collection Section */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <Title text1="OUR" text2="COLLECTION" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option value="relevant">Relevant</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <div
                key={index}
                className="rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-sm mt-10">
              No products found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
