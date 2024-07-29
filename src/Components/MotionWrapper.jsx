import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const timeoutId = setTimeout(handleScrollToTop, 100); // Adjust delay as needed

    return () => clearTimeout(timeoutId);
  }, [location]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: '100vh', // Start from the bottom of the viewport
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: '-100vh', // Move out to the top of the viewport
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full" // Ensure it takes full width and height
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
