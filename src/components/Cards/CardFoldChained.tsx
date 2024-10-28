import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface CardFoldChainedProps {
  cards: Array<{
    content: React.ReactNode;
  }>;
  width?: string;
  height?: string;
  className?: string;
}

export const CardFoldChained: React.FC<CardFoldChainedProps> = ({
  cards,
  width = '300px',
  height = '200px',
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardHeight = parseFloat(height);
  const overlap = 40; // Overlap between cards
  const numCards = cards.length;
  
  const totalExpandedHeight = cardHeight * numCards;
  const centerOffset = totalExpandedHeight - cardHeight;

  return (
    <div className={`relative ${className}`}>
      <div 
        className="relative box-border"
        style={{ 
          width,
          height: isExpanded ? `${totalExpandedHeight}px` : height,
          marginTop: isExpanded ? `${centerOffset}px` : '0',
          transition: 'margin-top 0.4s ease-out'
        }}
      >
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute left-0 origin-top box-border"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                zIndex: cards.length - index,
                top: '50%',
                marginTop: `-${cardHeight / 2}px`,
              }}
              animate={{
                x: isExpanded ? index * 100 : 0,
                y: isExpanded ? index * (cardHeight - overlap) - centerOffset : 0,
                rotate: isExpanded ? 2 - index * 1 : 0,
                zIndex: hoveredIndex === index ? 100 : (isExpanded ? index : cards.length - index),
                scale: hoveredIndex === index ? 1.05 : 1,
                marginLeft: isExpanded ? `-${cardHeight}px` : 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 90,
                damping: 15
              }}
              onClick={() => setIsExpanded(!isExpanded)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ width, height }}
            >
              <div 
                className={`w-full h-full bg-[#e7e7e7] rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                  hoveredIndex === index ? 'shadow-xl' : 'shadow-lg'
                }`}
                style={{
                  transform: isExpanded ? `rotate3d(1, 0, 0, ${index * 2}deg)` : 'none',
                  transition: 'transform 0.4s ease-out'
                }}
              >
                {card.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};