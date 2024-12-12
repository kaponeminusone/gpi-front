import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  type: 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop' | 'lineByLine' | 'blur' | 'typewriter';
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
      case 'rightToLeft':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'topToBottom':
        return {
          hidden: { y: -50, opacity: 0 },
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
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {};
    }
  };

  if (type === 'typewriter') {
    const words = text.split(' ');
    return (
      <div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: delay + index * 0.15,
              ease: 'easeOut',
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  if (type === 'lineByLine') {
    return (
      <div className={className}>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: delay + index * 0.03,
              ease: 'easeOut',
            }}
            className="inline-block"
          >
            {char === '\n' ? <br /> : char}
          </motion.span>
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