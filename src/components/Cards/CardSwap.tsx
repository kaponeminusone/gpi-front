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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ width, height }}
      className={`relative perspective-1000 ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ 
          duration: 0.6, 
          type: "spring", 
          stiffness: 70,
          scale: {
            duration: 0.2,
            ease: "easeOut"
          }
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front face */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-lg p-6 transition-all duration-300"
          style={{ 
            transform: 'rotateY(0deg)',
            zIndex: isFlipped ? 0 : 1,
            background: 'white',
            boxShadow: isHovered 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          {frontContent}
        </div>

        {/* Back face */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg p-6 transition-all duration-300"
          style={{ 
            transform: 'rotateY(180deg)',
            zIndex: isFlipped ? 1 : 0,
            background: 'white',
            boxShadow: isHovered 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          {backContent}
        </div>
      </motion.div>

      {/* Hover indicator */}
      <div 
        className="absolute bottom-3 right-3 text-gray-400 text-sm transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        Click para girar
      </div>
    </div>
  );
};