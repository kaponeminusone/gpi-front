'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  chapter?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, chapter }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Transform values based on scroll
  const height = useTransform(scrollY, [0, 100], [80, 60]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  // Update scroll state for conditional rendering
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const containerVariants = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      }
    }
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity, height }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-10 backdrop-blur-sm" />
      <div className="absolute inset-0">
        <div className="h-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-br-[2rem]" />
      </div>

      {/* Content container */}
      <motion.div
        variants={contentVariants}
        style={{ scale }}
        className="relative h-full container mx-auto px-4 py-2 flex items-center"
      >
        {/* Chapter circle */}
        {chapter && (
          <motion.div 
            className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="text-gray-800 text-lg font-bold">
              {chapter.split('.')[0]}
            </div>
          </motion.div>
        )}

        {/* Title and subtitle */}
        <div className="flex-1">
          <motion.h1
            className={`text-white font-bold tracking-tight transition-all ${
              isScrolled ? 'text-xl' : 'text-2xl mb-1'
            }`}
          >
            {title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 1, height: 'auto' }}
            animate={{ 
              opacity: isScrolled ? 0 : 1, 
              height: isScrolled ? 0 : 'auto' 
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 text-lg overflow-hidden"
          >
            {subtitle}
          </motion.h2>
        </div>

        {/* Additional elements can be added here, e.g., navigation links or buttons */}
      </motion.div>
    </motion.header>
  );
};