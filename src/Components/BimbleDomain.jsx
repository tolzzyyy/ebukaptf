import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/ghggg.gif";
import colors from "../Assets/Colors (2).png";
import typeo from "../Assets/Typography (1).png";
import workflow from "../Assets/Rectangle 74 (1).png";
import collab from "../Assets/Rectangle 42.png";
import boxes from "../Assets/Rectangle 53 (1).png";
import rectangle from "../Assets/Rectangle 65 (2).png";
import rectangle2 from "../Assets/Rectangle 66 (2).png";
import poster from "../Assets/Rectangle 48 (1).png";
import video from "../Assets/Brimble Domains.mp4";
import { Link } from "react-router-dom";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const BimbleDomain = () => {
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
    <div className="max-w-[1740px] h-full font-monument-extended my-[20px] mx-auto p-4 px-[30px] 2xl:px-[100px] lg:px-[40px] xl:px-[65px] flex flex-col items-center justify-center">

<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
  <iframe
    src="https://player.vimeo.com/video/1000144587?h=1953165e8c"
    className="absolute top-0 left-0 w-full h-full p-0 m-0"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<script src="https://player.vimeo.com/api/player.js"></script>

     
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full">
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">
            Brimble Domains
          </h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Motion & Communication Design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          Brimble is a Platform as a service that offers web deployment, The
          goal of this project was to create an engaging and visually appealing
          motion design video for Brimble’s Domains feature, highlighting their
          the various domains and the ease of use to potential customers.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Logomark</h1>
        </div>
        <img src={logo} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The logo adopts a minimalistic and modern design while incorporating a
          stylized ampersand (&), which cleverly suggests the company’s service
          of connectivity and integration.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Colors</h1>
        </div>
        <img src={colors} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The color palette selected for this project strikes an ideal balance
          between vibrant hues and neutral tones, aligning seamlessly with the
          aesthetic demands of modern technology-oriented brands
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Typeface</h1>
        </div>
        <img src={typeo} alt="" />
      </div>
      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Styleframes</h1>
        </div>
        <div className="w-full">
          <img src={workflow} alt="" className="w-full " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={collab} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={boxes} alt="" className="w-full " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rectangle} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={rectangle2} alt="" className="w-full " />
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
        <div>
          <Link
            to="/nft"
            className="cursor-pointer hover:text-blue-500 transition-all duration-700 text-[10px] md:text-[15px]"
          >
            Next Page
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center my-[30px] justify-center">
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
          <p className="md:text-[11px] text-[9px] mt-2 font-thin">©2024 Ebuka. All rights reserved.</p>
        </div>
    </div>
  );
};
export default BimbleDomain;
