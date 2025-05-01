import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full">
      <Title text1="CART" text2="TOTAL" />
      
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{currency}{delivery_fee.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">{currency}{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;