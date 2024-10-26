import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  type: 'leftToRight' | 'topToBottom' | 'bottomToTop' | 'lineByLine' | 'blur';
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  duration = 0.5,
  type,
  className = '',
}) => {
  const getAnimationVariants = () => {
    switch (type) {
      case 'leftToRight':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'topToBottom':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'bottomToTop':
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'blur':
        return {
          hidden: { filter: 'blur(10px)', opacity: 0 },
          visible: { filter: 'blur(0px)', opacity: 1 },
        };
      case 'lineByLine':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      default:
        return {};
    }
  };

  if (type === 'lineByLine') {
    const lines = text.split('\n');
    return (
      <div className={className}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={getAnimationVariants() as Variants}
            transition={{
              duration,
              delay: delay + index * 0.2,
              ease: 'easeOut',
            }}
            className="overflow-hidden"
          >
            {line}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={getAnimationVariants() as Variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {text}
    </motion.div>
  );
};