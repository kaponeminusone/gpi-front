'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FocusComponentProps {
  children: React.ReactNode
  scale?: number
  blurStrength?: number
  darknessFactor?: number
}

export default function FocusComponent({
  children,
  scale = 1.1,
  blurStrength = 3,
  darknessFactor = 0.2,
}: FocusComponentProps) {
  const [isActive, setIsActive] = useState(false)

  const handleToggleFocus = () => {
    setIsActive(!isActive)
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsActive(false)
  }

  return (
    <div className="relative w-full h-full" onClick={handleToggleFocus}>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-40 w-[120%] h-[120%] left-[-10%] top-[-10%] flex items-center justify-center" // Ajustar tamaño y posición
            onClick={handleBackgroundClick}
            style={{
              backgroundColor: `rgba(0, 0, 0, ${darknessFactor})`,
              backdropFilter: `blur(${blurStrength}px)`,
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          scale: isActive ? scale : 1,
          zIndex: isActive ? 50 : 'auto',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative cursor-pointer"
      >
        {children}
      </motion.div>
    </div>
  )
}
