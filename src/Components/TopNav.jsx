import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoadingAbout from './LoadingAbout';
import LoadingPlayground from './LoadingPlayground';

const TopNav = () => {
  const [open, setIsOpen] = useState(false);
  const [loadingState, setLoadingState] = useState({
    about: false,
    playground: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to About page
  const handleAboutClick = () => {
    setLoadingState({ ...loadingState, about: true });
    setTimeout(() => {
      navigate('/about');
    }, 4000); // Simulate loading delay (adjust as needed)
  };

  // Function to handle navigation to Playground page
  const handlePlaygroundClick = () => {
    setLoadingState({ ...loadingState, playground: true });
    setTimeout(() => {
      navigate('/playground');
    }, 4000); // Simulate loading delay (adjust as needed)
  };

  // Effect to manage loading state when navigating back using browser navigator
  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/about') {
      setLoadingState({ ...loadingState, about: true });
      setTimeout(() => {
        setLoadingState({ ...loadingState, about: false });
      }, 4000); // Simulate loading delay (adjust as needed)
    } else if (pathname === '/playground') {
      setLoadingState({ ...loadingState, playground: true });
      setTimeout(() => {
        setLoadingState({ ...loadingState, playground: false });
      }, 4000); // Simulate loading delay (adjust as needed)
    }
  }, [location.pathname]);

  return (
    <div className='w-full max-w-[1640px] mx-auto px-[30px] lg:px-[40px] xl:px-[65px]'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center w-[232px] mt-4 md:mt-0 ml-[-20px] gap-2 md:gap-3 justify-center'>
          <NavLink to='/' end className=''>
            <img className='w-[80px] md:w-[106px]' src={memoji} alt="Memoji" />
          </NavLink>
          <p className='text-[12px]'>Ebuka Uche</p>
        </div>
        <ul className='hidden lg:flex gap-[70px] text-[12px] items-center'>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black')}
            onClick={handleAboutClick} // Handle click on About link
          >
            About
          </NavLink>
          <NavLink
            to='/playground'
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black')}
            onClick={handlePlaygroundClick} // Handle click on Playground link
          >
            Playground
          </NavLink>
          <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </ul>
        <div onClick={() => setIsOpen(!open)} className='flex lg:hidden mt-4 cursor-pointer'>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
      {open && (
        <ul className='flex flex-col gap-4 text-[12px] mt-4 lg:hidden'>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black')}
            onClick={handleAboutClick} // Handle click on About link in mobile menu
          >
            About
          </NavLink>
          <NavLink
            to='/playground'
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black')}
            onClick={handlePlaygroundClick} // Handle click on Playground link in mobile menu
          >
            Playground
          </NavLink>
          <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </ul>
      )}
      {loadingState.about && <LoadingAbout />}
      {loadingState.playground && <LoadingPlayground />}
    </div>
  );
};

export default TopNav;
