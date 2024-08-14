import React, { useState } from 'react';

const Practice = () => {
  const [color, setColor] = useState('red');

  const handleColor = () => {
    setColor('blue');
  };

  return (
    <div>
      <h1>
        My favorite color is{' '}
        <span className={`text-${color}-500`}>
          {color}
        </span>
      </h1>
      <button onClick={handleColor} className='w-[100px] h-[50px] bg-black text-white'>
        Change to Blue
      </button>
    </div>
  );
};

export default Practice;
