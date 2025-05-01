import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCardData(tempData);
  }, [cartItems]);

  return (
    <div className="pt-8 px-4 sm:px-8 lg:px-16 xl:px-24">
      {/* Page Header */}
      <div className="mb-10">
        <Title text1="YOUR" text2="CART" />
        <p className="text-sm text-gray-500 mt-2">
          {cardData.length} {cardData.length === 1 ? 'item' : 'items'}
        </p>
      </div>

      {/* Cart Items */}
      {cardData.length > 0 ? (
        <div className="space-y-6 mb-16">
          {cardData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-start py-6 border-b border-gray-200">
                {/* Product Info */}
                <div className="flex items-start gap-6 w-full sm:w-auto">
                  <img 
                    className="w-24 h-24 object-cover" 
                    src={productData.image[0]} 
                    alt={productData.name} 
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium tracking-wide">{productData.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm">{currency}{productData.price}</p>
                      <span className="text-xs px-2 py-1 border border-gray-200">{item.size}</span>
                    </div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between w-full sm:w-48 mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        updateQuantity(item._id, item.size, Math.max(1, val));
                      }}
                      className="w-12 text-center py-1 border-x border-gray-200 text-sm focus:outline-none"
                      type="number"
                      min={1}
                    />
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="ml-4 hover:opacity-70 transition"
                  >
                    <img src={assets.bin_icon} alt="delete" className="w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/collection')}
            className="text-sm underline hover:text-black transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      )}

      {/* Cart Summary */}
      {cardData.length > 0 && (
        <div className="flex justify-end">
          <div className="w-full sm:w-96">
            <CartTotal />
            <button
              onClick={() => navigate('/place-order')}
              className="w-full bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition mt-6"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;