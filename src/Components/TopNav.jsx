import React from 'react';
import { NavLink } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';

const TopNav = () => {
  return (
    <div className=' w-full  px-[65px]'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center w-[232px] ml-[-20px] gap-3  justify-center'>
          <NavLink to='/' end className=''>
            <img className=' w-[106px]' src={memoji} alt="" />
          </NavLink>
          <p className='text-[12px]'>Ebuka Uche</p>
        </div>
        <ul className='flex gap-[70px] text-[12px] items-center'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'}>
            About
          </NavLink>
          <NavLink to='/playground' className={({ isActive }) => isActive ? 'text-blue-500' : 'hover:text-blue-500 transition-all duration-700 ease-in-out text-black'}>
            Playground
          </NavLink>
         <a className='hover:text-blue-500 transition-all duration-700 ease-in-out underline' href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view">Résumé</a>
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
