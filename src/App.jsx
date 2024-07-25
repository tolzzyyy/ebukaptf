import React from 'react';
import TopNav from './Components/TopNav';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Layout from './Components/Layout';
import Hero from './Components/Hero';
import PlayGround from './Components/PlayGround';
import Spotify from './Components/Spotify';


const App = () => {
  return (
    <div className='font-monument-extended'>
      {/* <TopNav /> */}
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Hero />} /> {/* Default route */}
          <Route path='about' element={<About />} /> {/* /about route */}
          <Route path='playground' element={<PlayGround />} /> {/* /about route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
