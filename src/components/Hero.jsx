import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import '../index.css' // Make sure global styles are imported

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#faf7f3] px-6 sm:px-16 py-10 sm:py-20 rounded-xl shadow-sm">
      {/* Left Side - Text */}
      <div className="w-full sm:w-1/2 flex items-center justify-center mb-10 sm:mb-0 font-body">
        <div className="text-[#2e2e2e] max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#2e2e2e]"></div>
            <p className="text-sm tracking-widest font-semibold uppercase">Our Bestsellers</p>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-3 mt-6 group cursor-pointer w-fit">
            <p className="text-base font-medium transition-colors group-hover:text-[#7d6c58]">
              Shop Now
            </p>
            <div className="w-10 h-[1px] bg-[#2e2e2e] group-hover:bg-[#7d6c58] transition-all"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <img
          src={assets.hero_img}
          alt="hero"
          className="rounded-xl shadow-lg object-cover w-[90%] sm:w-[420px] h-auto max-h-[600px]"
        />
      </div>
    </div>
  )
}

export default Hero
