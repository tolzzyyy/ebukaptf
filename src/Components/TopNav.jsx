import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';


const TopNav = () => {

  const [open, setIsopen] = useState(false)
  return (
    <div className=' w-full    px-[20px] lg:px-[40px] xl:px-[65px]'>
      <nav className=' flex justify-between  items-center'>
       
        <div className='flex items-center w-[232px] mt-4 md:mt-0 ml-[-20px] gap-2 md:gap-3  justify-center'>
          <NavLink to='/' end className=''>
            <img className=' w-[80px] md:w-[106px]' src={memoji} alt="" />
          </NavLink>
          <p className='text-[12px]'>Ebuka Uche</p>
        </div>
        <ul className=' hidden lg:flex gap-[70px] text-[12px] items-center'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'}>
            About
          </NavLink>
          <NavLink to='/playground' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'}>
            Playground
          </NavLink>
         <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </ul>
        <div onClick={() => {setIsopen(!open)}} className='flex lg:hidden mt-4 cursor-pointer'>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
      {open && (
        <ul className='flex flex-col gap-4 text-[12px] mt-4 lg:hidden'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'
            }
           
          >
            About
          </NavLink>
          <NavLink
            to='/playground'
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'
            }
           
          >
            Playground
          </NavLink>
          <a
            className='hover:text-blue-500 transition-all duration-700 ease-in-out underline'
            href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view"
            
          >
            Résumé
          </a>
        </ul>
      )}
    </div>
  );
}

export default TopNav;
