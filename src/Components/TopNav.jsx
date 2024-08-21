import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import memoji from '../Assets/Memoji.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const TopNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      if (open) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%'; // Prevent horizontal scroll
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [open]);

  return (
    <div className="w-full max-w-[1740px] mx-auto px-[30px] 2xl:px-[100px]  lg:px-[40px] xl:px-[65px]">
      <nav className="flex justify-between items-center">
        <div className="flex items-center w-[232px] mt-4 md:mt-0 ml-[-40px] md:ml-[-20px] gap-2 md:gap-3 justify-center">
          <NavLink to="/" end>
            <img className="w-[80px] md:w-[106px]" src={memoji} alt="Memoji" />
          </NavLink>
          <p className="md:text-[12px] text-[9px]">Ebuka Uche</p>
        </div>
        <ul className="hidden lg:flex gap-[70px] text-[12px] items-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'hover:text-blue-500 nav-link active-link'
                : 'hover:text-blue-500 nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/playground"
            className={({ isActive }) =>
              isActive
                ? 'nav-link active-link hover:text-blue-500'
                : 'hover:text-blue-500 nav-link'
            }
          >
            Playground
          </NavLink>
          <a
            className="hover:text-blue-500 transition-all duration-700 ease-in-out underline"
            href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view"
          >
            Résumé
          </a>
        </ul>
        <div onClick={() => setOpen(!open)} className="flex lg:hidden mt-4 cursor-pointer">
          {open ? (
            <FaTimes className="z-50 fixed right-[30px] top-[40px] text-black" size={24} />
          ) : (
            <FaBars size={24} className='fixed right-[30px]  top-[40px]' />
          )}
        </div>
      </nav>
      <div
        className={`fixed top-0 lg:hidden left-0 w-full bg-white z-30 transition-all duration-500 ease-in-out ${
          open ? 'opacity-100 h-screen' : 'opacity-0 h-0'
        }`}
        style={{
          transitionProperty: 'opacity, height',
          height: open ? '100vh' : '0',
        }}
        aria-hidden={!open} // Improve accessibility by hiding from screen readers when not open
      >
        <div className="flex flex-col gap-4 text-[12px] justify-center items-center p-4 h-full">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'nav-link hover:text-blue-500 active-link'
                : 'hover:text-blue-500 nav-link'
            }
            onClick={() => setOpen(false)} // Close the menu when a link is clicked
          >
            About
          </NavLink>
          <NavLink
            to="/playground"
            className={({ isActive }) =>
              isActive
                ? 'nav-link active-link hover:text-blue-500'
                : 'hover:text-blue-500 nav-link'
            }
            onClick={() => setOpen(false)} // Close the menu when a link is clicked
          >
            Playground
          </NavLink>
          <a
            className="hover:text-blue-500 transition-all duration-700 ease-in-out underline"
            href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view"
            onClick={() => setOpen(false)} // Close the menu when a link is clicked
          >
            Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
