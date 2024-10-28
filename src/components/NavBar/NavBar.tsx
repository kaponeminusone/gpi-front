'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface NavBarProps {
  sections: string[]
  currentIndex: number
  onSectionClick: (index: number) => void
}

export default function NavBar({ sections, currentIndex, onSectionClick }: NavBarProps) {
  return (
    <motion.nav
      className="fixed left-0 top-0 h-full w-16 bg-gray-800 text-white flex flex-col items-center justify-center"
      initial={{ x: -64 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {sections.map((section, index) => (
        <motion.button
          key={section}
          className={`w-full py-4 text-center ${
            currentIndex === index ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSectionClick(index)}
          aria-label={`Go to ${section}`}
        >
          {section[0].toUpperCase()}
        </motion.button>
      ))}
    </motion.nav>
  )
}