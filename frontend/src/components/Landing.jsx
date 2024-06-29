import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import washing from '../images/machine.png';
import ac from '../images/air-conditioner.png';

const Landing = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/home');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen justify-center px-4 md:px-0 overflow-y-hidden hide-scrollbar">
        <h1 className="text-3xl md:text-5xl font-bold mt-[100px] md:mt-[120px] text-center">
          Home services at your Doorstep
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[100px] mt-8 md:mt-16 w-full mb-10 md:mb-20">
          <img src={washing} alt="Washing Machine" className="w-[150px] md:w-[300px]" />
          <button
            className="text-white font-bold py-4 px-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg transform hover:shadow-blue-800 hover:shadow-md"
            onClick={handleGetStarted}
          >
            Get started
          </button>
          <img src={ac} alt="Air Conditioner" className="w-[200px] md:w-[350px] mb-10 md:mb-0" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
