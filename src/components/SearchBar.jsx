import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('/collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // When search icon is clicked, go to collection page and show search bar
  const handleSearchIconClick = () => {
    if (!location.pathname.includes('/collection')) {
      navigate('/collection');
    }
    setShowSearch(true);
  };

  if (!(showSearch && visible)) return null;

  return (
    <div className="border-t border-b bg-white py-4 px-4 sm:px-8 shadow-sm">
      <div className="flex justify-center items-center gap-3 flex-wrap">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full py-2 pl-5 pr-10 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black text-sm placeholder-gray-500"
          />
          <img
            src={assets.search_icon}
            alt="Search"
            onClick={handleSearchIconClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 opacity-60 cursor-pointer"
          />
        </div>

        <button
          onClick={() => setShowSearch(false)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
        >
          <img src={assets.cross_icon} alt="Close" className="w-3" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
