import React from "react";
import Ebuka from "../Assets/Profile Picture.png";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const About = () => {
  return (
    <div className="px-[30px] max-w-[1640px] mx-auto lg:px-[40px] xl:px-[75px] 2xl:px-[100px] about flex flex-col justify-center  mt-[40px] xl:my-[55px] 2xl:my-[20px] items-center min-h-[400px] xl:h-[110vh]">
      <div className="flex flex-col md:flex-row items-center h-full w-full lg:justify-between gap-[20px] md:gap-[30px]">
        <div className="w-auto md:w-[410px] xl:w-[440px] 2xl:w-[550px]">
          <img
            src={Ebuka}
            className="w-full h-auto object-cover"
            alt="Profile"
          />
        </div>
        <div className="w-full md:max-w-[720px] xl:w-[770px] 2xl:max-w-[870px] font-[400] leading-[1.7] text-[10px] md:text-[8px] 2xl:text-[14px] xl:text-[12px] flex flex-col gap-[18px]">
          <h1 className="text-[24px] font-monument-extended font-[200]">
            Hi, I’m EBUKA!
          </h1>
          <p>
             If you’ve gotten this far, I now consider us friends.
            It’s nice to meet you! I'm a Motion and visual designer passionate
            about creating visuals that tell stories and designing experiences
            that improve everyday lives. I previously worked with{" "}
            <a href="https://upptic.com/" target="_blank" className="text-blue-500 underline">
              Upptic↗
            </a>
            ,{" "}
            <a href="https://brimble.io/" target="_blank" className="text-blue-500 underline">
              Brimble↗
            </a>
            , and{" "}
            <a href="https://www.nftng.io/home" target="_blank" className="text-blue-500 underline">
              NFTng↗
            </a>{" "}
            as Designer.
          </p>
          <p>
            Creating art another true love whether it’s traditional or digital.
            You can sometimes find me sketching in procreate. I’m always excited
            to share my creativity and enthusiasm with new teams and I’m
            currently seeking a full-time position and internship opportunities.
            If you ever want to chat or have a position or a project that could
            benefit from my creativity & style,{" "}
            <a href="mailto:Eburogersuche@yahoo.com" className="underline text-blue-500">
              reach out to me
            </a>
            !
          </p>
          <p>
            Thanks for stopping by. I hope you enjoyed my website. If you
            didn't,{" "}
            <a
              href="https://wallpapers.com/images/hd/funny-chihuahua-pictures-xsaojsskugo3h6rs.jpg"
              className="underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              something special
            </a>{" "}
            to make up for it :)
          </p>
          <div className="flex items-center gap-4">
            <p>Stalk me</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.behance.net/ebukauche1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance size={24} className="text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ebukau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={22} className="text-blue-500" />
              </a>
              <a
                href="https://x.com/t0_ge_?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={22} className="text-blue-500" />
              </a>
              <a href="mailto:Eburogersuche@yahoo.com">
                <IoMail size={22} className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] flex flex-col items-center w-full gap-4 justify-center py-8 md:py-12 mt-[50px] md:mt-[70px] h-auto border-black">
        <h1 className="font-[100] text-[10px] md:text-[14px]">
          Is your BIG <span className="text-blue-500">idea</span> ready to go{" "}
          <span className="text-blue-500">WILD</span>?
        </h1>
        <h1 className="text-lg font-bold lg:text-2xl">
          Let’s work <span className="text-blue-500">together</span> :)
        </h1>
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
      
    </div>
  );
};

export default About;
