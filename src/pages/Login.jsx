import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const navigate = useNavigate();
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Here you would typically handle authentication
    // For demo purposes, we'll redirect immediately
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="pt-20 px-8 max-w-7xl mx-auto flex justify-center">
      <form onSubmit={onSubmitHandler} className="w-full max-w-md space-y-6">
        <div className="text-center mb-10">
          <Title 
            text1={currentState === 'Login' ? 'ACCOUNT' : 'CREATE'} 
            text2={currentState === 'Login' ? 'LOGIN' : 'ACCOUNT'} 
          />
        </div>

        {currentState === 'Sign Up' && (
          <input 
            type="text" 
            className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black" 
            placeholder="Full Name" 
            required
          />
        )}

        <input 
          type="email" 
          className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black" 
          placeholder="Email Address" 
          required
        />

        <input 
          type="password" 
          className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black" 
          placeholder="Password" 
          required
        />

        <div className="flex justify-between text-sm pt-2">
          {currentState === 'Login' && (
            <button type="button" className="text-gray-500 hover:text-black">
              Forgot Password?
            </button>
          )}
          
          <button 
            type="button" 
            onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
            className="text-gray-500 hover:text-black"
          >
            {currentState === 'Login' ? 'Create an account' : 'Already have an account?'}
          </button>
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors uppercase tracking-wider"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;