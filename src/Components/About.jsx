import React from "react";
import Ebuka from "../Assets/Profile Picture.png";
import { BsBehance } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto my-8 md:my-12 lg:my-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <img
            src={Ebuka}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            alt="Profile"
          />
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-6 text-sm sm:text-base">
          <h1 className="text-2xl sm:text-3xl font-semibold font-monument-extended">
            Hi, I'm EBUKA!
          </h1>
          <p>
            If you've gotten this far, I now consider us friends. It's nice to meet you! I'm a motion and visual designer passionate about creating visuals that tell stories and designing brand experiences that improve everyday lives. I love bold colors, textures, and expressive copywriting! I'm an ISMS Major at something University and currently interning with the wonderful design & marcom team at Apple.
          </p>
          <p>
            Creating art is another true love whether it's traditional or digital. You can sometimes find me sketching in Procreate. As a fresh graduate of Information Science & Media Studies from Pan Atlantic University, I want to share my skills and all-round enthusiasm with a new team. If you ever want to chat or have a position or a project that could benefit from my creativity & style,{' '}
            <a className="underline text-blue-600 hover:text-blue-800" href="mailto:Eburogersuche@yahoo.com">
              let's talk!
            </a>
            {' '}and I shall return your message via virtual carrier pigeon.
          </p>
          <p>
            Thanks for stopping by. I hope you enjoyed my website. If you didn't, here's a little{' '}
            <a
              className="underline text-blue-600 hover:text-blue-800"
              href="https://wallpapers.com/images/hd/funny-chihuahua-pictures-xsaojsskugo3h6rs.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              something special
            </a>
            {' '}to make up for it :)
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <p className="font-semibold">Stay with me</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.behance.net/ebukauche1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <BsBehance size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ebukau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <LiaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/t0_ge_?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <FaTwitter size={22} />
              </a>
              <a 
                href="mailto:Eburogersuche@yahoo.com"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <CgMail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-12 pt-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Let's work <span className="text-blue-500">together</span> :)
        </h2>
      </div>
    </div>
  );
};

export default About;
