import React from "react";
import guardians from "../Assets/guardians.png";
import brimble from "../Assets/brimble.png";
import brimble2 from "../Assets/brimble2.png";
import nft from "../Assets/nft.png";
import bdomain from "../Assets/bdomain.png";
import oxellus from "../Assets/oxellus.png";
import { BsBehance } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="w-full mt-[20px] max-w-[1740px] mx-auto px-[30px] lg:px-[40px] xl:px-[65px] h-full border-t-[1px]">
      <div className="flex flex-col">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mt-[30px] md:mt-[80px]">
          {/* Card 1 */}
          <Link to="/bimble" className="relative group">
            <div className="relative">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={brimble} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Brimble Public Beta
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity and motion design</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/nft" className="relative group">
            <div className="relative">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={nft} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                NFT ng
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Identity, Packaging and experience design</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to='/bimble2' className="relative group">
            <div className="relative">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={brimble2} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                 Brimble Teaser
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Motion design and Illustration</p>
            </div>
          </Link>
          <Link to="/bimbledomain" className="relative group">
            <div className="relative">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={bdomain} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Brimble Domains
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Motion design and art direction</p>
            </div>
          </Link>

          {/* Card 4 */}
          <div className="relative group">
            <div className="relative">
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

          {/* Card 5 */}
          {/* <Link to="/bimbledomain" className="relative group">
            <div className="relative">
              <div className="absolute top-0 h-full bg-blue-500 transition-all duration-700 ease-in-out w-0 group-hover:w-[20px]"></div>
              <img src={bdomain} className="w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="transition-all duration-700 text-[13px] lg:text-[9px] xl:text-[21px] ease-in-out group-hover:text-blue-500">
                Brimble Domains
              </h1>
              <p className="text-[#737373] text-[9px] lg:text-[12px]">Motion design and art direction</p>
            </div>
          </Link> */}

          {/* Card 6 */}
          <div className="relative group">
            <div className="relative">
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

        {/* Social Media Links */}
        <div className="flex flex-col items-center my-[60px] justify-center">
          <div className="flex items-center gap-3">
            <a href="https://www.behance.net/ebukauche1" target="_blank" rel="noopener noreferrer">
              <BsBehance size={26} />
            </a>
            <a href="https://www.linkedin.com/in/ebukau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <LiaLinkedin size={26} />
            </a>
            <a href="https://x.com/t0_ge_?s=21" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={26} />
            </a>
            <a href="mailto:Eburogersuche@yahoo.com">
              <CgMail size={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
