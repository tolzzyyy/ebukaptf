import React, { useState } from "react";
import guardians from "../Assets/guardians.png";
import brimble from "../Assets/brimble.png";
import brimble2 from "../Assets/brimble2.png";
import nft from "../Assets/nft.png";
import bdomain from "../Assets/bdomain.png";
import oxellus from "../Assets/oxellus.png";

const ProjectPage = () => {
  const [hovered, setHovered] = useState("");

  return (
    <div className="w-full mt-[50px] px-[50px] h-full border-t-[1px]">
        <div className="flex flex-col">
      <div className="pt-[80px] flex justify-between">
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={brimble} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
            Brimble Beta Launch
          </h1>
          <p className="text-[#737373] text-[12px]">Identity and motion design</p>
          </div>
        </div>
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={guardians} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
          Guild of Guardians Cinematic
          </h1>
          <p className="text-[#737373] text-[12px]">Identity, Packaging and experience design</p>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-between">
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={brimble2} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
          welcome To Brimble
          </h1>
          <p className="text-[#737373] text-[12px]">Motion design and Illustration</p>
          </div>
        </div>
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={nft} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
          NFT ng
          </h1>
          <p className="text-[#737373] text-[12px]">Identity, Packaging and experience design</p>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-between">
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={bdomain} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
          Brimble Domains
          </h1>
          <p className="text-[#737373] text-[12px]">Motion design and art direction</p>
          </div>
        </div>
        <div className={`relative group `}>
          <div className="relative">
            <div className="absolute top-0  h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
            <img src={oxellus} className="" alt="" />
          </div>
          <div className="flex flex-col  mt-3">
          <h1 className="transition-all duration-700 text-[27px] ease-in-out group-hover:text-blue-500">
          Guild of Guardians Static
          </h1>
          <p className="text-[#737373] text-[12px]">Identity and motion design</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectPage;
