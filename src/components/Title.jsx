import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-4 mb-4 font-display">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-[#7d6c58] tracking-wide">
        {text1}{' '}
        <span className="text-[#1B1F2A] font-semibold">
          {text2}
        </span>
      </h2>
      <div className="h-[2px] w-12 sm:w-16 bg-gray-800">
        
      </div>
    </div>
  )
}

export default Title
