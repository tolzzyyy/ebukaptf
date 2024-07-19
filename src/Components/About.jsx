import React from "react";
import Ebuka from "../Assets/Profile Picture.png";
import { BsBehance, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="  px-[30px] max-w-[1640px] mx-auto lg:px-[40px] xl:px-[65px] about flex flex-col md:flex-row justify-center my-[30px]  xl:my-0 items-center min-h-[400px] xl:h-[100vh] ">
      <div className="flex flex-col lg:flex-row min-h-[100vh] items-center w-full  lg:justify-between 2xl:justify-center 2xl:gap-[200px] gap-[40px] md:gap-8">
          <div className="w-auto lg:w-[460px] xl:w-[600px]">
            <img src={Ebuka} className=" 2xl:w-[600px] xl:w-[500px] h-auto" alt="Profile" />
          </div>
          <div className="w-auto  lg:w-[767px] 2xl:w-[800px] font-[400] leading-[13.6px] lg:leading-[normal] 2xl:leading-6 2xl:text-[15px]   text-[8.3px] md:text-[10px] lg:text-[8px] xl:text-[14px] flex flex-col gap-[30px] md:gap-7 xl:gap-8">
            <h1>
              Hi, I’m EBUKA! If you’ve gotten this far, I now consider us friends. It’s nice to meet you! I'm a motion and visual designer passionate about creating visuals that tell stories and designing brand experiences that improve everyday lives. I love bold colors, textures, and expressive copywriting! I’m an ISMS Major at something University and currently interning with the wonderful design & marcom team at Apple.
            </h1>
            <h1>
              Creating art is another true love whether it’s traditional or digital. You can sometimes find me sketching in Procreate. As a fresh graduate of Information Science & Media Studies from Pan Atlantic University, I want to share my skills and all-round enthusiasm with a new team. If you ever want to chat or have a position or a project that could benefit from my creativity & style, <a className="underline" href="mailto:Eburogersuche@yahoo.com">let's talk!</a> and I shall return your message via virtual carrier pigeon.
            </h1>
            <h1>
              Thanks for stopping by. I hope you enjoyed my website. If you didn't, here's a little <a className="underline" href="https://wallpapers.com/images/hd/funny-chihuahua-pictures-xsaojsskugo3h6rs.jpg">something special</a> to make up for it :)
            </h1>
            <div className="flex items-center gap-5">
              <p>Stay with me</p>
              <div className="flex items-center gap-3">
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer"><BsBehance size={26} className="text-blue-500"/></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LiaLinkedin size={26} className="text-blue-500"/></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} className="text-blue-500"/></a>
                <a href="mailto:Eburogersuche@yahoo.com"><CgMail size={26} className="text-blue-500"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] flex flex-col items-center gap-10 justify-center py-8 md:py-12 h-auto border-black mx-[20px] lg:mx-[40px] xl:mx-[65px]">
        <h1 className="text-lg font-bold lg:text-2xl">Let’s work <span className="text-blue-500">together</span> :)</h1>
        <div className="flex items-center gap-3">
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer"><BsBehance size={26} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LiaLinkedin size={26} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={26} /></a>
          <a href="mailto:Eburogersuche@yahoo.com"><CgMail size={26} /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
