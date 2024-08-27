import React from 'react';
import Smoke from '../Assets/Rectangle 62.png';
import tacos from '../Assets/Rectangle 67 (4).png'
import color from '../Assets/Rectangle 69.png'
import demo from '../Assets/demo.png'
import mulan from '../Assets/Rectangle 70.png'
import discord from '../Assets/Rectangle 66 (4).png'
import scar from '../Assets/scar.png'
import black from '../Assets/Rectangle 71.png'
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const PlayGround = () => {
  return (
    <div className='max-w-[1640px]  h-full part  font-monument-extended mt-[20px] md:mt-[50px] px-[30px] mx-auto py-4 w-full lg:px-[40px] xl:px-[35px] 2xl:px-[100px]'>
      <div className='mx-auto flex flex-col gap-2 text-center'>
        <h1 className='text-[11px] md:text-[15px]'>Welcome to my Playground</h1>
        <p className='text-[10px] font-extra-light text-[#1A1A1A]'>Interaction design, Motion design, 3D comps, user interfaces and sketches. Last Updated - August 2024</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 justify-center mt-[50px]'>
        <div className='flex  flex-col gap-4'>
         <div className='flex flex-col gap-1 items-left w-full'> <img className='w-full' src={Smoke} alt="Smoke" /> <h1 className='md:px-2 px-1 text-[11px] md:text-[15px]'>Apple Watch Compilation</h1> <p className=' text-[#BFBFBF] px-1 md:px-2 text-[10px]'>UI exploration & Animation</p> </div>
         <div> <img className='w-full' src={tacos} alt="Smoke" /> <h1 className=' text-[11px] md:text-[15px] px-2 md:px-3'>Kept app store</h1> <p className=' text-[#BFBFBF] px-2 md:px-3 text-[10px]'>Poster Design</p> </div>
         <div> <img className='w-full' src={color} alt="Smoke" /> <h1 className='text-[11px] md:text-[15px]'>Advancing Africa’s Posperity</h1> <p className=' text-[#BFBFBF]  text-[10px]'>UI exploration</p> </div>
         
        </div>
        <div className='flex flex-col gap-4 mb-[70px]'>
        <div className='flex flex-col gap-1 items-left w-full'>  <img className='w-full' src={mulan} alt="Mulan" /> <h1 className='text-[11px] md:text-[15px]'>404 page</h1> <p className=' text-[#BFBFBF] text-[10px]'>UI exploration</p> </div>
        <div className='flex flex-col gap-1 items-left w-full'>  <img className='w-full' src={discord} alt="Discord" /><h1 className='text-[11px] md:text-[15px]'>Valley Hopeful - Album cover animation</h1> <p className=' text-[#BFBFBF] text-[10px]'>Motion design</p> </div>
        <div className='flex flex-col gap-1 items-left w-full'> <img className='w-auto p-0' src={black} alt="Scar" /> <h1 className=' px-2 md:px-3 text-[11px] md:text-[15px]'>New Balance 550</h1> <p className=' px-2 md:px-3 text-[#BFBFBF] text-[10px]'>Digital art, 3D & graphics design</p> </div>
         
        </div>
      </div>

      <div className="flex flex-col items-center pt-[100px]    justify-center">
          <div className="flex items-center gap-3">
            <a href="https://www.behance.net/ebukauche1" target="_blank" rel="noopener noreferrer">
              <FaBehance size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ebukau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://x.com/t0_ge_?s=21" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="mailto:Eburogersuche@yahoo.com">
              <IoMail size={20} />
            </a>
          </div>
          <p className="md:text-[11px]   text-[9px] mt-2 font-thin">©2024 Ebuka. All rights reserved.</p>
        </div>
    </div>
  );
}

export default PlayGround;
