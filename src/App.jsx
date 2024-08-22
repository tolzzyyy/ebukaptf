import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About';
import Layout from './Components/Layout';
import Hero from './Components/Hero';
import PlayGround from './Components/PlayGround';
import MotionWrapper from './Components/MotionWrapper';
import BimblePage from './Components/BimblePage';
import Nft from './Components/Nft';
import Practice from './Components/Practice';
import MotionWrapper2 from './Components/MotionWrapper2';
import BimbleDomain from './Components/BimbleDomain';
import BimbleWelcome from './Components/BimbleWelcome';
import Discord from './Components/Discord';

const App = () => {
  const location = useLocation();
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const delay = 0.9; // Adjust delay to control cursor smoothness

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * delay;
      cursorY += (mouseY - cursorY) * delay;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', moveCursor);
    updateCursor();

    const hoverElements = document.querySelectorAll('.getHover');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div className="font-monument-extended min-h-[100vh] relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`cursor fixed hidden xl:flex top-0 left-0 w-[5px] h-[5px] pointer-events-none duration-300 rounded-full z-50 ${
          isHovering ? 'biggerCursor' : ''
        }`}
        style={{
          backgroundColor: isHovering ? 'black' : 'white',
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MotionWrapper><Layout /></MotionWrapper>}>
            <Route index element={<MotionWrapper><Hero /></MotionWrapper>} />
            <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
            <Route path="/playground" element={<MotionWrapper><PlayGround /></MotionWrapper>} />
            <Route path="/bimble" element={<MotionWrapper><BimblePage /></MotionWrapper>} />
            <Route path="/bimbledomain" element={<MotionWrapper><BimbleDomain /></MotionWrapper>} />
            <Route path="nft" element={<MotionWrapper><Nft /></MotionWrapper>} />
            <Route path="/bimble2" element={<BimbleWelcome />} />
            <Route path="/discord" element={<Discord />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
