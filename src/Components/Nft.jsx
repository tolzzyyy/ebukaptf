import React, { useEffect, useRef, useState } from "react";
import nft from "../Assets/Nft1.png";
import web from "../Assets/nfttt.gif";
import video from "../Assets/NFT ng.mp4";
import color from "../Assets/Colors (1).png";
import rec from "../Assets/Rectangle 74.png";
import rec2 from "../Assets/Rectangle 68.png";
import rec3 from "../Assets/Rectangle 53.png";
import rec4 from "../Assets/Rectangle 65 (1).png";
import rec5 from "../Assets/Rectangle 66 (1).png";
import { Link } from "react-router-dom";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Nft = () => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

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

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1540px] h-full font-monument-extended my-[20px] 2xl:px-[100px] part mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[35px] flex flex-col items-center justify-center">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://player.vimeo.com/video/886521904?h=f75fc025e5"
          className="absolute top-0 left-0 w-full h-full p-0 m-0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full">
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">NFT ng</h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Identity and motion design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          NFT ng is a web3 community for NFT’s and web 3 enthusiasts, the aim of
          this project was to create awareness and unique value proposition,
          aimed at attracting potential members and attendees, Increase brand
          awareness and attract new users by showcasing the benefits and
          impactfullnes of NFT ng community, Enhance the platform's online
          presence and drive traffic to the NFT ng website.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <h1 className="my-3 text-[9px] md:text-[11px] ">Logomark</h1>
        <img src={web} alt="" />
        <div className="sm:max-w-[500px] mt-6 md:mt-3 max-w-[320px] font-thin text-[10px]">
          The logo reflects the brand's emphasis on customization and
          personalization.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Colors</h1>
        </div>
        <img src={color} alt="" />
        <div className="sm:max-w-[500px] mt-6 md:mt-3 max-w-[320px] font-thin text-[10px]">
          The split-complimentary color scheme emphasizes the sense of progress,
        </div>
      </div>
      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Styleframes</h1>
        </div>
        <div className="w-full">
          <img src={rec} alt="" className="w-full " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rec2} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={rec3} alt="" className="w-full " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rec4} alt="" className="w-full" />
          </div>
          <div className="w-full">
            <img src={rec5} alt="" className="w-full" />
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
            to="/bimble2"
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

export default Nft;
