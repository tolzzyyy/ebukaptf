import React from 'react';
import Smoke from '../Assets/smoke.png';
import tacos from '../Assets/tacos.png'
import color from '../Assets/color.png'
import demo from '../Assets/demo.png'
import mulan from '../Assets/mulan.png'
import discord from '../Assets/discord.png'
import scar from '../Assets/scar.png'
import black from '../Assets/black.png'

const PlayGround = () => {
  return (
    <div className='max-w-[1740px] h-full font-monument-extended mt-[20px] md:mt-[50px] px-[30px] mx-auto py-4 w-full lg:px-[40px] xl:px-[65px] 2xl:px-[100px]'>
      <div className='mx-auto flex flex-col gap-2 text-center'>
        <h1>Pixel Pushing</h1>
        <p className='text-[10px] font-extra-light text-[#1A1A1A]'>Interaction design, Motion design, 3D comps, user interfaces and sketches. Last Updated - July 2024</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 justify-center mt-[50px]'>
        <div className='flex flex-col gap-4'>
          <img className='w-full' src={Smoke} alt="Smoke" />
          <img className='w-full' src={tacos} alt="Tacos" />
          <img className='w-full' src={color} alt="Color" />
          <img className='w-full' src={demo} alt="Demo" />
        </div>
        <div className='flex flex-col gap-4 mb-[70px]'>
          <img className='w-full' src={mulan} alt="Mulan" />
          <img className='w-full' src={discord} alt="Discord" />
          <img className='w-full' src={scar} alt="Scar" />
          <img className='w-full' src={black} alt="Black" />
        </div>
      </div>
    </div>
  );
}

export default PlayGround;
