import React, { useState, useEffect, useRef } from "react";
import poster from "../Assets/Brimbles.png";
import video from "../Assets/BrimbleBeta.mp4";
import workflow from "../Assets/workflow.png";
import collab from "../Assets/collaboration.png";
import boxes from "../Assets/boxes.png";

const BimblePage = () => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const handlePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      setShowPlayButton(false);
    }
  };

  useEffect(() => {
    const handlePlayEvent = () => {
      setControlsVisible(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlayEvent);
    }

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Disable Ctrl+S and Ctrl+Shift+I
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
      }
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-[1640px] h-full font-monument-extended my-[20px]  mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px] flex flex-col items-center justify-center">
      <div className="relative w-full  ">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg"
          poster={poster}
          controls={controlsVisible}
          controlsList="nodownload"
          onClick={handlePlay}
          style={{ cursor: "pointer" }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showPlayButton && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center text-[30px] md:text-[100px] bg-black bg-opacity-20 text-white"
          >
            ▶
          </button>
        )}
      </div>
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start  md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full  ">
          <h1 className=" text-[13px] lg:text-[9px] xl:text-[21px] ">
            Brimble Beta Launch
          </h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Identity and motion design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin  text-[10px]">
          Brimble is a cloud platform designed for easy deployment and scaling
          of modern JavaScript applications. This project involved
          conceptualizing, designing, and animating a short promotional video
          that communicates the brand's identity and in a clear and captivating
          manner.
        </div>
      </div>

      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
        <div className="">
          <img src={workflow} alt="" />
        </div>
        <div className=" grid grid-cols-1 md:flex  gap-3">
          <div>
            <img src={collab} alt="" />
          </div>
          <div>
            <img src={boxes} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BimblePage;
