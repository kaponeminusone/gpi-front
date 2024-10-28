import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface CardSwapProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

export const CardSwap: React.FC<CardSwapProps> = ({
  frontContent,
  backContent,
  width = '300px',
  height = '400px',
  className = '',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{ width, height }}
      className={`relative perspective-1000 cursor-pointer ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6">
          {frontContent}
        </div>
        <div
          className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};