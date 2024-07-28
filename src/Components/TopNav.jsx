import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoadingAbout from './LoadingAbout';
import LoadingPlayground from './LoadingPlayground';

const TopNav = () => {
  const [open, setOpen] = useState(false);
  



  useEffect(() => {
  
    const handleBodyScroll = () => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto'; 
      }
    };

    handleBodyScroll(); 

   
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [open]);

  return (
    <div className='w-full max-w-[1640px]  mx-auto px-[30px] lg:px-[40px] xl:px-[65px]'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center w-[232px] mt-4 md:mt-0 ml-[-40px] md:ml-[-20px] gap-2 md:gap-3 justify-center'>
          <NavLink to='/' end className=''>
            <img className='w-[80px] md:w-[106px]' src={memoji} alt="Memoji" />
          </NavLink>
          <p className='md:text-[12px] text-[9px]'>Ebuka Uche</p>
        </div>
        <ul className='hidden lg:flex gap-[70px] text-[12px] items-center'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? ' hover:text-blue-500 nav-link active-link' : ' hover:text-blue-500 nav-link'
            }
          
          >
            About
          </NavLink>
          <NavLink
            to='/playground'
            className={({ isActive }) =>
              isActive ? 'nav-link active-link hover:text-blue-500' : 'hover:text-blue-500 nav-link'
            }
           
          >
            Playground
          </NavLink>
          <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </ul>
        <div onClick={() => setOpen(!open)} className='flex lg:hidden mt-4 cursor-pointer'>
          {open ? <FaTimes className='z-50 fixed right-[30px] top-[40px] text-black' size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-30 overflow-y-auto transition-transform duration-500 transform ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex flex-col gap-4 text-[12px] justify-center items-center p-4 h-full'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'nav-link hover:text-blue-500 active-link' : ' hover:text-blue-500 nav-link'
            }
        
          >
            About
          </NavLink>
          <NavLink
            to='/playground'
            className={({ isActive }) =>
              isActive ? 'nav-link active-link hover:text-blue-500' : ' hover:text-blue-500 nav-link'
            }
          
          >
            Playground
          </NavLink>
          <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </div>
      </div>
      {/* {loadingState.about && <LoadingAbout />}
      {loadingState.playground && <LoadingPlayground />} */}
    </div>
  );
};

export default TopNav;
