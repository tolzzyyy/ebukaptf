import React from "react";
import Ebuka from "../Assets/Profile Picture.png";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const About = () => {
  return (
    <div className="px-5 max-w-[1640px] mx-auto lg:px-[40px] xl:px-[65px] 2xl:px-[100px] about flex flex-col justify-center my-8 xl:my-12 items-center min-h-[400px] xl:h-[110vh]">
      <div className="flex flex-col lg:flex-row items-center w-full lg:justify-between gap-6 lg:gap-8">
        <div className="flex-shrink-0 w-full max-w-[300px] md:max-w-[400px] xl:max-w-[470px] 2xl:max-w-[550px]">
          <img
            src={Ebuka}
            className="w-full h-auto object-cover"
            alt="Profile"
          />
        </div>
        <div className="w-full text-center lg:text-left xl:w-[740px] 2xl:w-[730px] font-[400] leading-[1.5] text-[10px] md:text-[12px] lg:text-[14px] flex flex-col gap-6">
          <h1 className="text-[18px] md:text-[20px] font-monument-extended font-[200]">
            Hi, I’m EBUKA!
          </h1>
          <p>
            Hi i’m Ebuka! If you’ve gotten this far, I now consider us friends.
            It’s nice to meet you! I'm a Motion and visual designer passionate
            about creating visuals that tell stories and designing experiences
            that improve everyday lives. I previously worked with{" "}
            <a href="https://upptic.com/">Upptic↗</a> ,{" "}
            <a href="https://brimble.io/">Brimble↗</a>, and{" "}
            <a href="https://www.nftng.io/home">NFTng↗</a> as a Designer.
          </p>
          <p>
            Creating art is another true love of mine, whether it’s traditional
            or digital. You can sometimes find me sketching in Procreate. I’m
            always excited to share my creativity and enthusiasm with new teams
            and I’m currently seeking a full-time position and Internship
            opportunities. So if you ever want to chat or have a position or
            project that could benefit from my creativity & style,{" "}
            <a
              className="underline text-blue-500"
              href="mailto:Eburogersuche@yahoo.com"
            >
              reach out to me
            </a>
            ! I shall return your message via a virtual carrier pigeon.
          </p>
          <p>
            Thanks for stopping by. I hope you enjoyed my website. If you didn't,{" "}
            <a
              className="underline text-blue-500"
              href="https://wallpapers.com/images/hd/funny-chihuahua-pictures-xsaojsskugo3h6rs.jpg"
            >
              here's something special
            </a>{" "}
            to make up for it :)
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-5">
            <p>Stalk me</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.behance.net/ebukauche1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance size={26} className="text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ebukau"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} className="text-blue-500" />
              </a>
              <a
                href="https://x.com/t0_ge_?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} className="text-blue-500" />
              </a>
              <a href="mailto:Eburogersuche@yahoo.com">
                <IoMail size={24} className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t-[1px] flex flex-col items-center w-full gap-4 justify-center py-8 md:py-12 mt-10 h-auto border-black mx-[20px] lg:mx-[40px] xl:mx-[65px]">
        <h1 className="font-[100] text-[11px] md:text-[12px]">
          Is your BIG <span className="text-blue-500">idea</span> ready to go{" "}
          <span className="text-blue-500">WILD</span>?
        </h1>
        <h1 className="text-lg font-bold lg:text-2xl">
          Let’s work <span className="text-blue-500">together</span> :)
        </h1>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center my-[30px] justify-center">
        <div className="flex items-center gap-3">
          <a
            href="https://www.behance.net/ebukauche1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ebukau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://x.com/t0_ge_?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a href="mailto:Eburogersuche@yahoo.com">
            <IoMail size={20} />
          </a>
        </div>
        <p className="text-[9px] md:text-[11px] mt-2 font-thin">
          ©2024 Ebuka. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
