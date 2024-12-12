import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface CardFoldHorizontalProps {
  cards: Array<{
    content: React.ReactNode;
  }>;
  width?: string;
  height?: string;
  className?: string;
}

export const CardFoldHorizontal: React.FC<CardFoldHorizontalProps> = ({
  cards,
  width = '100px',
  height = '200px',
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Estado para el índice hover

  // Convertir el valor de width a número si tiene unidades
  const cardWidth = parseFloat(width);
  const overlap = 60; // La superposición entre las cartas
  const numCards = cards.length;

  const totalExpandedWidth = cardWidth * numCards;
  const centerOffset = totalExpandedWidth - cardWidth;

  return (
    <div className={`relative ${className}`}>
      <div 
        className="relative box-border" 
        style={{ 
          width: isExpanded ? `${totalExpandedWidth}px` : width,
          height,
          marginLeft: isExpanded ? `${centerOffset}px` : '0',
          transition: 'margin-left 0.4s ease-out'
        }}
      >
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute top-0 origin-left box-border"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                zIndex: cards.length - index,
                left: '50%',
                marginLeft: `-${cardWidth / 2}px`
              }}
              animate={{
                x: isExpanded ? index * (cardWidth - overlap) - centerOffset : 0,
                y: isExpanded ? index * 5 : 0,
                rotate: isExpanded ? -2 + index * 1 : 0,
                zIndex: hoveredIndex === index ? 100 : (isExpanded ? index : cards.length - index),
                scale: hoveredIndex === index ? 1.05 : 1, // Aumentar ligeramente el tamaño al hacer hover
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 90,
                damping: 15
              }}
              onClick={() => setIsExpanded(!isExpanded)}
              onMouseEnter={() => setHoveredIndex(index)} // Actualizar el índice cuando se hace hover
              onMouseLeave={() => setHoveredIndex(null)} // Limpiar el índice al salir
              style={{ width, height }}
            >
              <div 
                className={`w-full h-full bg-[#e7e7e7] rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                  hoveredIndex === index ? 'shadow-xl' : 'shadow-lg'
                }`} // Cambiar la sombra al hacer hover
                style={{
                  transform: isExpanded ? `rotate3d(0, 1, 0, ${index * 2}deg)` : 'none',
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
