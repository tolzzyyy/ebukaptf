import React from "react";
import Ebuka from "../Assets/Profile Picture.png";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const About = () => {
  return (
    <div className="px-[20px] max-w-[1640px] mx-auto md:px-[30px] lg:px-[40px] xl:px-[55px] 2xl:px-[70px] about flex flex-col justify-center mt-[20px] xl:my-[20px] items-center min-h-[400px] min-h-[calc(100vh-40px)]"> {/* Adjusted for taskbar */}
      <div className="flex flex-col md:flex-row items-center w-full lg:justify-between gap-[30px] md:gap-[40px]">
        <div className="w-auto md:w-[340px] xl:w-[470px] 2xl:w-[550px]">
          <img
            src={Ebuka}
            className="w-full h-auto object-cover"
            alt="Profile"
          />
        </div>
        <div className="w-auto md:w-[690px] xl:w-[740px] 2xl:w-[840px] font-[400] leading-[1.5] text-[10px] md:text-[14px] lg:text-[15px] xl:text-[12px] 2xl:text-[14px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[30px] 2xl:gap-[30px]">
          <h1 className="text-[20px] font-monument-extended font-[200]">
            Hi, I’m EBUKA!
          </h1>
          <p>
            If you’ve gotten this far, I now consider us friends.
            It’s nice to meet you! I'm a Motion and visual designer passionate
            about creating visuals that tell stories and designing experiences
            that improve everyday lives. I previously worked with{" "}
            <a href="https://upptic.com/">Upptic↗</a>,{" "}
            <a href="https://brimble.io/">Brimble↗</a>, and{" "}
            <a href="https://www.nftng.io/home">NFTng↗</a> as Designer.
          </p>
          <p>
            Creating art is another true love, whether it’s traditional or
            digital. You can sometimes find me sketching in Procreate. I’m
            always excited to share my creativity and enthusiasm with new teams,
            and I’m currently seeking a full-time position and internship
            opportunities. So if you ever want to chat or have a position or a
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
            Thanks for stopping by. I hope you enjoyed my website. If you
            didn’t,{" "}
            <a
              className="underline text-blue-500"
              href="https://wallpapers.com/images/hd/funny-chihuahua-pictures-xsaojsskugo3h6rs.jpg"
            >
              here’s something special
            </a>{" "}
            to make up for it :)
          </p>
          <div className="flex items-center  gap-4">
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
      <div className="border-t-[1px] flex flex-col items-center w-full gap-4 justify-center py-8 md:py-10 mt-[40px] md:mt-[50px] h-auto border-black">
        <h1 className="font-[100] text-[9px] lg:text-[14px]">
          Is your BIG <span className="text-blue-500">idea</span> ready to go{" "}
          <span className="text-blue-500">WILD</span>?
        </h1>
        <h1 className="text-lg font-bold lg:text-2xl">
          Let’s work <span className="text-blue-500">together</span> :)
        </h1>
      </div>
    </div>
  );
};

export default About;
