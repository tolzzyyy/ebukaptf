import React, { useState } from "react";
import guardians from "../Assets/guardians.png";
import brimble from "../Assets/brimble.png";
import brimble2 from "../Assets/brimble2.png";
import nft from "../Assets/nft.png";
import bdomain from "../Assets/bdomain.png";
import oxellus from "../Assets/oxellus.png";

const ProjectPage = () => {
  return (
    <div className="w-full mt-[50px] max-w-[1640px] mx-auto px-[30px] lg:px-[40px] xl:px-[65px] h-full border-t-[1px]">
      <div className="flex flex-col">
        <div className="md:pt-[80px] pt-[30px] flex flex-col items-center md:flex-row md:justify-between  2xl: gap-8 md:gap-8">
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full lg:w-auto 2xl:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={brimble} className="w-full  h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Brimble Beta Launch
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity and motion design</p>
            </div>
          </div>
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={guardians} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Guild of Guardians Cinematic
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity, Packaging and experience design</p>
            </div>
          </div>
        </div>
        <div className="pt-[50px] flex flex-col md:flex-row justify-between gap-8 md:gap-8">
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={brimble2} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Welcome To Brimble
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Motion design and Illustration</p>
            </div>
          </div>
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={nft} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                NFT ng
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity, Packaging and experience design</p>
            </div>
          </div>
        </div>
        <div className="pt-[50px] flex flex-col md:flex-row justify-between gap-8 md:gap-8">
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={bdomain} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700  text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Brimble Domains
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Motion design and art direction</p>
            </div>
          </div>
          <div className="relative group w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={oxellus} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Guild of Guardians Static
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity and motion design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
