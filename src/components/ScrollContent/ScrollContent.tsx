// ScrollContent.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import NavBar from './NavBar'

interface ScrollContentProps {
  sections: string[]; // Secciones para la navegación
  children: React.ReactNode[]
}

export default function ScrollContent({ sections, children }: ScrollContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToSection = (index: number) => {
    console.log(`Cambiando a la sección: ${index}`); // Añade esto para verificar
    setCurrentIndex(index);
  }
  

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      goToSection(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSection(currentIndex - 1)
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        nextSlide()
      } else if (e.deltaY < -50) {
        prevSlide()
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [currentIndex, children.length])

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  const direction = currentIndex - (currentIndex > 0 ? currentIndex - 1 : 0);

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={containerRef}>
      <NavBar 
        sections={sections} 
        currentIndex={currentIndex} 
        onSectionClick={goToSection} 
      />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {currentIndex > 0 && (
          <button onClick={prevSlide} className="mr-2">
            &uarr;
          </button>
        )}
        {currentIndex < children.length - 1 && (
          <button onClick={nextSlide}>
            <ChevronDown className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}
