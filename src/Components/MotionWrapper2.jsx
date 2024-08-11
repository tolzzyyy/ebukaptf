import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionWrapper2 = ({ children }) => {
    const pageTransition = {
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '-100vw' },
        initial: { opacity: 0, x: '100vw' }
      };
    
      const pageStyle = {
        position: 'absolute',
        width: '100%'
      };
    
      return (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransition}
          style={pageStyle}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    };

export default MotionWrapper2
