// NavBar.tsx
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
      className="fixed right-[20px] top-[100px] h-[500px] w-[150px] bg-gray-100 border-black flex flex-col shadow-lg"
      style={{ zIndex: 1000 }}
      initial={{ x: '100%' }}  // Empieza fuera de la pantalla, a la izquierda
      animate={{ x: 0 }}  // Se mueve hacia la posición original
      transition={{ type: 'spring', stiffness: 100, damping: 20 }} // Transición suave tipo "spring"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section}
          className={`w-full p-4 text-left text-sm transition-colors duration-300 ${
            currentIndex === index 
              ? 'bg-gray-300 font-medium' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onSectionClick(index); // Cambia la sección
          }}
          aria-label={`Go to ${section}`}
        >
          {index + 1}.{index + 1} {section}
        </motion.button>
      ))}
    </motion.nav>
  )
}
