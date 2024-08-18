// App.js
import React from 'react';
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

const App = () => {
  const location = useLocation();

  return (
    <div className='font-monument-extended'>
      <AnimatePresence mode='wait'r>
        <Routes location={location} key={location.pathname}>
         <Route path='/' element={<MotionWrapper><Layout /></MotionWrapper>}>
            <Route index element={<MotionWrapper><Hero /></MotionWrapper>} />
            <Route path='about' element={<MotionWrapper><About /></MotionWrapper>} />
            <Route path='playground' element={<MotionWrapper><PlayGround /></MotionWrapper>} />
            <Route path='bimble' element={<MotionWrapper><BimblePage /></MotionWrapper>} />
            <Route path='bimbledomain' element={<MotionWrapper><BimbleDomain /></MotionWrapper>} />
            <Route path='/nft' element={<MotionWrapper><Nft /></MotionWrapper>} />
            <Route path='/bimble2' element={<BimbleWelcome/>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
