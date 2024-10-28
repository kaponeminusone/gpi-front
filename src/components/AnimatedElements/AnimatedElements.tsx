import React, { ReactNode } from 'react';
import { motion, Variants, Transition } from 'framer-motion';

type AnimationType = 'popup' | 'slide' | 'fade' | 'move';
type SlideDirection = 'left' | 'right' | 'top' | 'bottom';

interface Position {
  x: number;
  y: number;
}

interface AnimatedElementProps {
  children: ReactNode;
  type: AnimationType;
  initialPosition?: Position;
  targetPosition?: Position;
  slideDirection?: SlideDirection;
  delay?: number;
  duration?: number;
  className?: string;
  transition?: Transition;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type,
  initialPosition,
  targetPosition,
  slideDirection = 'left',
  delay = 0,
  duration = 0.5,
  className = '',
  transition: customTransition,
}) => {
  const getSlideOffset = (direction: SlideDirection): Position => {
    switch (direction) {
      case 'left':
        return { x: -100, y: 0 };
      case 'right':
        return { x: 100, y: 0 };
      case 'top':
        return { x: 0, y: -100 };
      case 'bottom':
        return { x: 0, y: 100 };
    }
  };

  const getAnimationVariants = (): Variants => {
    switch (type) {
      case 'popup':
        return {
          hidden: { 
            scale: 0,
            opacity: 0,
            ...initialPosition && { x: initialPosition.x, y: initialPosition.y }
          },
          visible: {
            scale: 1,
            opacity: 1,
            ...targetPosition && { x: targetPosition.x, y: targetPosition.y }
          },
        };
      case 'slide': {
        const offset = getSlideOffset(slideDirection);
        return {
          hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            ...initialPosition && { x: initialPosition.x, y: initialPosition.y }
          },
          visible: {
            opacity: 1,
            x: targetPosition?.x ?? 0,
            y: targetPosition?.y ?? 0
          },
        };
      }
      case 'fade':
        return {
          hidden: { 
            opacity: 0,
            ...initialPosition && { x: initialPosition.x, y: initialPosition.y }
          },
          visible: {
            opacity: 1,
            ...targetPosition && { x: targetPosition.x, y: targetPosition.y }
          },
        };
      case 'move':
        return {
          hidden: {
            ...initialPosition ? 
              { x: initialPosition.x, y: initialPosition.y } : 
              { x: 0, y: 0 }
          },
          visible: {
            ...targetPosition ? 
              { x: targetPosition.x, y: targetPosition.y } : 
              { x: 0, y: 0 }
          },
        };
      default:
        return {};
    }
  };

  const defaultTransition: Transition = {
    duration,
    delay,
    ease: type === 'popup' ? 'backOut' : 'easeOut',
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={getAnimationVariants()}
      transition={customTransition || defaultTransition}
    >
      {children}
    </motion.div>
  );
};