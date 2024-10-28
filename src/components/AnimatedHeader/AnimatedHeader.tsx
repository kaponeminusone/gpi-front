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
  const height = 70;
  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  // Update scroll state for conditional rendering
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const containerVariants = {
    hidden: {
      scaleX: 0,
      originX: 0, // Set the origin of scaling to the left side
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
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
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
      style={{opacity }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gray-100" />
      <div className="absolute inset-0">
        <div className="h-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-br-[2rem]" />
      </div>

      {/* Content container */}
      <motion.div
        variants={contentVariants}
        style={{ scale }}
        className="relative h-full container mx-auto px-3 py-2 flex items-end"
      >
        <div className="flex items-center gap-4 mb-2">
          {/* Chapter number */}
          {chapter && (
            <div className="flex items-center">
              <div className="text-gray-300 text-2xl font-light mr-2">
                {chapter.split('.')[0]}
              </div>
              <div className="text-white text-1xl font-medium">
                {chapter.split('.')[1]}
              </div>
            </div>
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
            {!isScrolled && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-gray-300 text-lg"
              >
                {subtitle}
              </motion.h2>
            )}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};