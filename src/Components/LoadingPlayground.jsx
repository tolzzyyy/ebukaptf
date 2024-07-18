// LoadingPlayground.js
import React from 'react';
import archive from '../Assets/archive.gif'

const LoadingPlayground = () => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Semi-transparent black background
        zIndex: 9999, // Ensure it overlays everything else
      }}>
        <img className='w-[40px]' src={archive} alt="Loading About..." />
      </div>
  );
};

export default LoadingPlayground;
