import React, { useEffect, useRef, useState } from "react";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import oxellus from "../Assets/Rectangle 74 (3).png";
import oxellus1 from "../Assets/Rectangle 48 (3).png";
import oxellus2 from "../Assets/Property 1=Variant2.png";
import secondimage from "../Assets/Rectangle 67 (3).png";

const Discord = () => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handlePlayEvent = () => {
      setControlsVisible(true);
      setIsPlaying(true);
    };

    const handlePauseEvent = () => {
      setIsPlaying(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlayEvent);
      videoElement.addEventListener("pause", handlePauseEvent);
    }

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "S")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlayEvent);
        videoElement.removeEventListener("pause", handlePauseEvent);
      }
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1640px] h-full font-monument-extended my-[20px] mx-auto p-4 px-[30px] 2xl:px-[100px]  lg:px-[40px] xl:px-[65px] gap-4 flex flex-col items-center justify-center">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 2500, // Time before switching images (in ms)
            disableOnInteraction: false,
          }}
          speed={1500} // Speed of the fade transition
          fadeEffect={{ crossFade: true }} // Smoothens the fade effect
          className="relative"
        >
          <SwiperSlide>
            <div className="relative group">
              <img
                src={oxellus1}
                className="w-full h-auto object-cover" // Responsive height and consistent width
                alt="First Image"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group">
              <img
                src={oxellus2}
                className="w-full h-auto object-cover" // Responsive height and consistent width
                alt="Second Image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Content sections */}
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full">
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">
            NFT ng Graphics
          </h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Graphic and Visual design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          NFT ng is a web3 community for NFT and web 3 enthusiasts, This project
          aimed to create a promotional graphic for the "DeFi Summer 2024"
          event, scheduled to take place in Lagos on June 26th, and create a
          visually appealing graphic to announce the upcoming launch of NFT NG's
          Discord server.
        </div>
      </div>

      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={oxellus} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full">
            <img src={secondimage} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-between w-full items-center">
        <div>
          <h1
            onClick={scrollToTop}
            className="cursor-pointer hover:text-blue-500 transition-all duration-700 text-[10px] md:text-[15px]"
          >
            Back to top
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center my-[70px] md:my-[100px]  justify-center">
        <div className="flex items-center gap-3">
          <a
            href="https://www.behance.net/ebukauche1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ebukau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
        <p className="md:text-[11px] text-[9px] mt-2 font-thin">
          ©2024 Ebuka. All rights reserved.
        </p>
      </div>
    </div>
  );
};


export default Discord;
