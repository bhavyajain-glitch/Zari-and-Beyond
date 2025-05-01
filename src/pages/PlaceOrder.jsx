import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)

  return (
    <div className="pt-20 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="space-y-6">
        <Title text1="DELIVERY" text2="INFORMATION" />
        
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="First Name" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
        </div>
        
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
        />
        
        <input 
          type="text" 
          placeholder="Street Address" 
          className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
        />
        
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="City" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
          <input 
            type="text" 
            placeholder="State" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Zip Code" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
          <input 
            type="text" 
            placeholder="Country" 
            className="border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
          />
        </div>
        
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black" 
        />
      </div>

      <div className="space-y-8">
        <div className="border-b pb-8">
          <CartTotal />
        </div>

        <div className="space-y-6">
          <Title text1="PAYMENT" text2="METHOD" />
          
          <div className="space-y-3">
            <div 
              onClick={() => setMethod('strip')} 
              className={`flex items-center gap-4 p-4 cursor-pointer border ${method === 'strip' ? 'border-black' : 'border-gray-200'}`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'strip' ? 'bg-black border-black' : 'border-gray-400'}`}>
                {method === 'strip' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <img className="h-5" src={assets.stripe_logo} alt="stripe" />
            </div>
            
            <div 
              onClick={() => setMethod('razorpay')} 
              className={`flex items-center gap-4 p-4 cursor-pointer border ${method === 'razorpay' ? 'border-black' : 'border-gray-200'}`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'razorpay' ? 'bg-black border-black' : 'border-gray-400'}`}>
                {method === 'razorpay' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <img className="h-5" src={assets.razorpay_logo} alt="razorpay" />
            </div>
            
            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-4 p-4 cursor-pointer border ${method === 'cod' ? 'border-black' : 'border-gray-200'}`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'cod' ? 'bg-black border-black' : 'border-gray-400'}`}>
                {method === 'cod' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <p className="text-gray-700">Cash on Delivery</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/orders')} 
            className="w-full bg-[#7d6c58] text-white py-3 hover:bg-gray-800 transition-colors"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder