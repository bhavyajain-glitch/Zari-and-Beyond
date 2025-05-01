import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about us' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <h2 className='text-xl font-medium'>Welcome to our store!</h2>
          <p className='text-sm text-gray-500'>
            We are a passionate team dedicated to providing you with the best shopping experience. Our mission is to offer high-quality products at affordable prices, ensuring that you find exactly what you're looking for.</p>
          <p className='text-sm text-gray-500'>
            Thank you for choosing us. We look forward to serving you!</p>

      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize quality in every product we offer. Our team carefully selects items to ensure they meet our high standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We prioritize quality in every product we offer. Our team carefully selects items to ensure they meet our high standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We prioritize quality in every product we offer. Our team carefully selects items to ensure they meet our high standards.</p>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default About
