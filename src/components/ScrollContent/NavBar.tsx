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
      className="fixed left-0 top-0 h-full w-20 bg-gray-900 text-white flex flex-col items-center justify-center z-50"
      style={{ zIndex: 1000 }}
      initial={{ x: '-100%' }}  // Empieza fuera de la pantalla, a la izquierda
      animate={{ x: 0 }}  // Se mueve hacia la posición original
      transition={{ type: 'spring', stiffness: 100, damping: 20 }} // Transición suave tipo "spring"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section}
          className={`w-full py-4 text-center text-xl transition-colors duration-300 ${
            currentIndex === index ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("Botón clickeado"); // Verificar clic
            onSectionClick(index); // Cambia la sección
          }}
          aria-label={`Go to ${section}`}
        >
          {section[0].toUpperCase()}
        </motion.button>
      ))}
    </motion.nav>
  )
}
