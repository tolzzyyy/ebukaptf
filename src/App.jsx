// App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About';
import Layout from './Components/Layout';
import Hero from './Components/Hero';
import PlayGround from './Components/PlayGround';
import MotionWrapper from './Components/MotionWrapper';

const App = () => {
  const location = useLocation();

  return (
    <div className='font-monument-extended'>
      <AnimatePresence mode='wait'r>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<MotionWrapper><Hero /></MotionWrapper>} />
            <Route path='about' element={<MotionWrapper><About /></MotionWrapper>} />
            <Route path='playground' element={<MotionWrapper><PlayGround /></MotionWrapper>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
