import React from 'react'

const Newsletter = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="text-center bg-[#fdfaf7] py-16 px-4 font-body">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-display">
        Subscribe & Get 20% Off
      </h2>
      <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
        Join our newsletter to receive your discount and stay in the loop with our latest arrivals and offers. No spam, just the good stuff.
      </p>

      <form onSubmit={onSubmitHandler} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d6c58] transition duration-200"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-[#7d6c58] text-white rounded-lg hover:bg-[#695b4a] transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
