import React, { useEffect, useRef, useState } from "react";
import video from "../Assets/Brimble Ad.mp4";
import poster from "../Assets/Rectangle 48 (2).png";

import workflow from "../Assets/Rectangle 74 (2).png";
import collab from "../Assets/Rectangle 65 (3).png";
import boxes from "../Assets/Rectangle 66 (3).png";
import logo from "../Assets/bimbleee2.gif";
import colors from "../Assets/Colors (3).png";
import typeo from "../Assets/Typography.png";
import rectangle from "../Assets/Rectangle 42 (1).png";
import rectangle2 from "../Assets/Rectangle 53 (2).png";
import { Link } from "react-router-dom";

const BimbleWelcome = () => {
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
    <div className="max-w-[1740px] h-full font-monument-extended my-[20px] mx-auto p-4 px-[30px] 2xl:px-[100px]  lg:px-[40px] xl:px-[65px] flex flex-col items-center justify-center">
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>

        <iframe
          src="https://player.vimeo.com/video/1000157668?h=b6783f0a33"
        className="absolute top-0 left-0 w-full h-full p-0 m-0"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
     
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full">
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">
            Brimble Teaser
          </h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Identity and motion design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          Complete packaging rebrand of Noctua, a manufacturer of computer fans
          for PC-building enthusiasts. The newly redesigned brand evolves the
          enthusiast market by embracing sustainability and technological
          innovation in packaging and communication. It also allows users to
          enjoy a more intuitive building experience through functional and
          efficient design.→ Pentawards 2023 Silver→ ADC Young Ones 2023
          Shortlist
        </div>
      </div>

      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Logomark</h1>
        </div>
        <img src={logo} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The logo showcases a sleek and contemporary design, incorporating a
          stylized ampersand (&) that subtly signifies connectivity and
          integration.{" "}
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Colors</h1>
        </div>
        <img src={colors} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The selected color palette for this project offers a harmonious blend
          of vibrant and neutral tones, perfectly suited to contemporary design
          standards for technology-focused brands.
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
            className="cursor-pointer text-[10px] hover:text-blue-500 transition-all duration-700 md:text-[15px]"
          >
            Back to top
          </h1>
        </div>
        <div>
          <Link
            to="/bimbledomain"
            className="cursor-pointer hover:text-blue-500 transition-all duration-700 text-[10px] md:text-[15px]"
          >
            Next Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BimbleWelcome;
