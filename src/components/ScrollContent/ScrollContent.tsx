'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollContentProps {
  children: React.ReactNode[]
}

export default function ScrollContent({ children }: ScrollContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0) // Estado para el índice anterior
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      setPrevIndex(currentIndex) // Actualiza el índice anterior antes de cambiar
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setPrevIndex(currentIndex) // Actualiza el índice anterior antes de cambiar
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Para desplazamiento hacia abajo
      if (e.deltaY > 50) {
        nextSlide()
      }
      // Para desplazamiento hacia arriba
      else if (e.deltaY < -50) {
        prevSlide()
      }
    }

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newIndex = Math.round(scrollPosition / windowHeight)
        if (newIndex !== currentIndex) {
          setPrevIndex(currentIndex); // Actualiza el índice anterior
          setCurrentIndex(newIndex)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentIndex, children.length])

  const slideVariants = {
    enter: (direction: number) => {
      return ({
      y: (direction > 0 ? '100%' : '-100%'), // Hacia abajo o hacia arriba
      opacity: 0,
    })},
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: '-100%', // Hacia arriba o hacia abajo
      opacity: 0,
    }),
  }

  const direction = currentIndex - prevIndex; // Calcula la dirección con base en el índice actual y anterior

  return (
    <div className="relative w-full h-full overflow-hidden" ref={containerRef}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction} // Pasa la dirección como prop
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
            &uarr; {/* Botón para ir a la sección anterior (opcional) */}
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
