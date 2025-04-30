import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
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

    if (showSearch && search) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

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
  }, [category, subCategory, sortType, products, search, showSearch]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="pt-8 px-4 sm:px-8 lg:px-16 xl:px-24 min-h-screen bg-white">
      {/* Page Title */}
      <div className="mb-8">
        <Title text1="OUR" text2="COLLECTION" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="lg:w-64">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-light tracking-wider">FILTERS</h3>
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className="lg:hidden text-sm underline"
            >
              {showFilter ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className={`space-y-6 ${showFilter ? 'block' : 'hidden lg:block'}`}>
            {/* Category Filter */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm font-medium mb-4 uppercase tracking-wider">Categories</p>
              <div className="space-y-3">
                {['Men', 'Women', 'Kids'].map(cat => (
                  <label className="flex items-center gap-3" key={cat}>
                    <input 
                      type="checkbox" 
                      value={cat} 
                      onChange={toggleCategory}
                      className="h-4 w-4 rounded border-gray-300 focus:ring-black"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm font-medium mb-4 uppercase tracking-wider">Type</p>
              <div className="space-y-3">
                {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
                  <label className="flex items-center gap-3" key={type}>
                    <input 
                      type="checkbox" 
                      value={type} 
                      onChange={toggleSubCategory}
                      className="h-4 w-4 rounded border-gray-300 focus:ring-black"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Collection Section */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <p className="text-sm text-gray-500">
              Showing {filterProducts.length} {filterProducts.length === 1 ? 'item' : 'items'}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border-0 border-b border-gray-300 px-0 py-1 text-sm focus:outline-none focus:ring-0 focus:border-black"
              >
                <option value="relevant">Relevant</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {filterProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No products found</p>
              <button 
                onClick={() => {
                  setCategory([]);
                  setSubCategory([]);
                }}
                className="text-sm underline hover:text-black transition"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;