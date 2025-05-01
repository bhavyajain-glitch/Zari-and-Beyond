import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState]  = useState('Login')
  const onSubmitHandler = async(event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl text-gray-900'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-900' />
      </div>
      {currentState === 'Login'? '' :<input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />}
      <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
      <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
      <div className='w-full flex justify-between text-sm mt-[-2%]'>
        <p className='text-gray-500 cursor-pointer'>Forgot Password?</p>
        {
          currentState === 'Login' ? 
          <p onClick={() => setCurrentState('Sign Up')} className='text-gray-500 cursor-pointer'>Create an account</p> : 
          <p onClick={() => setCurrentState('Login')} className='text-gray-500 cursor-pointer'>Already have an account?</p>
        }
      </div>
      <button className='bg-[#7d6c58] text-white font-light px-8 py-2 mt-4'>{currentState === 'Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
