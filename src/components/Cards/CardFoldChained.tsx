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

  // Convertir `height` a número para hacer operaciones aritméticas
  const numericHeight = parseFloat(height);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="relative" 
        style={{ 
          width, 
          height: isExpanded 
            ? `${numericHeight * cards.length - (cards.length - 1) * 40}px`  // Ajuste de la altura con el valor numérico
            : height 
        }}
      >
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute left-0 top-0 origin-top"
              initial={{
                y: 0,
                x: 0,
                rotate: 0,
                zIndex: cards.length - index,
              }}
              animate={{
                y: isExpanded ? index * (numericHeight - 40) : 0,  // Usamos el valor numérico para la posición vertical
                x: isExpanded ? -index * 20 : 0,
                rotate: isExpanded ? -5 + index * 2 : 0,
                zIndex: isExpanded ? index : cards.length - index,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ width, height }}  // Mantiene el tamaño original
            >
              <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow">
                {card.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};



// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useState } from 'react';

// interface CardFoldChainedProps {
//   cards: Array<{
//     content: React.ReactNode;
//   }>;
//   width?: string;
//   height?: string;
//   className?: string;
// }

// export const CardFoldChained: React.FC<CardFoldChainedProps> = ({
//   cards,
//   width = '300px',
//   height = '200px',
//   className = '',
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className={`relative ${className}`}>
//       <div className="relative" style={{ width, height: isExpanded ? height * cards.length - (cards.length - 1) * 40 : height }}>
//         <AnimatePresence>
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="absolute left-0 top-0 origin-top"
//               initial={{
//                 y: 0,
//                 x: 0,
//                 rotate: 0,
//                 zIndex: cards.length - index,
//               }}
//               animate={{
//                 y: isExpanded ? index * (parseInt(height) - 40) : 0,
//                 x: isExpanded ? -index * 20 : 0,
//                 rotate: isExpanded ? -5 + index * 2 : 0,
//                 zIndex: isExpanded ? index : cards.length - index,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15
//               }}
//               onClick={() => setIsExpanded(!isExpanded)}
//               style={{ width, height }}
//             >
//               <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow">
//                 {card.content}
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };