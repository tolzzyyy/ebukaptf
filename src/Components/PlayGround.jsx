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
    <div className='max-w-[1640px] h-full font-monument-extended mt-[20px] md:mt-[50px] mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px]'>
<div className='mx-auto flex flex-col gap-2 text-center'>
  <h1>Pixel Pushing</h1>
  <p className='text-[10px] font-extra-light text-[#1A1A1A]'>Interaction design, Motion design, 3D comps, user interfaces and sketches. Last Updated - July 2024</p>
</div>

<div className='flex gap-7 justify-center mt-[50px]'>
  <div className='flex flex-col gap-4'>
    <img className='w-[600px]' src={Smoke} alt="" />
    <img className='w-[600px]' src={tacos} alt="" />
    <img className='w-[600px]' src={color} alt="" />
    <img className='w-[600px]' src={demo} alt="" />
  </div>
  <div className='flex flex-col mb-[70px] gap-4'>
    <img className='w-[600px]' src={mulan} alt="" />
    <img className='w-[600px]' src={discord} alt="" />
    <img className='w-[600px]' src={scar} alt="" />
    <img className='w-[600px]' src={black} alt="" />
  </div>

</div>
    </div>
  )
}

export default PlayGround
