'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavBarProps {
  sections: (string | undefined)[];
  currentIndex: number;
  onSectionClick: (index: number) => void;
}

export default function NavBar({ sections, currentIndex, onSectionClick }: NavBarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav
      className={`fixed right-[20px] top-[100px] h-[500px] w-[150px] bg-gray-100 border flex flex-col shadow-lg overflow-hidden transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-70'
      }`}
      style={{ zIndex: 1000 }}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)} // Mouse entra al NavBar
      onMouseLeave={() => setIsHovered(false)} // Mouse sale del NavBar
    >
      <div
        className="h-full w-full overflow-y-scroll scrollbar-hide"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {sections.map((section, index) =>
          section ? (
            <motion.button
              key={section + index}
              className={`w-full p-4 text-left text-sm transition-colors duration-300 ${
                currentIndex === index ? 'bg-gray-300 font-medium' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionClick(index)}
              aria-label={`Go to ${section}`}
            >
              {section}
            </motion.button>
          ) : null
        )}
      </div>
    </motion.nav>
  );
}
