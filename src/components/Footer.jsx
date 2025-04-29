import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import logo from '../assets/Logo-rmbg.png'

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf7] px-6 md:px-16 py-14 font-body">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm text-gray-700">

        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <img src={logo} className="mb-5 w-36" alt="logo" />
          <p className="w-full md:w-4/5 text-gray-600 text-sm leading-relaxed">
            A celebration of craftsmanship and elegance — our most adored designs, perfected in every stitch.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-5 font-display">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Home</li>
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">About us</li>
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Delivery</li>
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Optional: Add another column (e.g. Help or Connect) */}
        <div>
          <p className="text-lg font-semibold mb-5 font-display">HELP</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Returns</li>
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Track Order</li>
            <li className="hover:text-[#7d6c58] transition-colors duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
