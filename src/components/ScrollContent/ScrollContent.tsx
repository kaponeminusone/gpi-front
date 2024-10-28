'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import NavBar from '../NavBar/NavBar'

interface ScrollContentProps {
  children: React.ReactNode[]
}

export default function ScrollContent({ children }: ScrollContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      setPrevIndex(currentIndex)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setPrevIndex(currentIndex)
      setCurrentIndex(currentIndex - 1)
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

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newIndex = Math.round(scrollPosition / windowHeight)
        if (newIndex !== currentIndex) {
          setPrevIndex(currentIndex)
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
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: '-100%',
      opacity: 0,
    }),
  }

  const direction = currentIndex - prevIndex

  const sections = React.Children.map(children, (child, index) => `Section ${index + 1}`)

  const handleSectionClick = (index: number) => {
    const targetSection = sectionRefs.current[index]
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full h-full overflow-y-auto" ref={containerRef}>
      <NavBar sections={(sections ? sections : [])} currentIndex={currentIndex} onSectionClick={handleSectionClick} />
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen w-full pl-16"
        >
          {child}
        </div>
      ))}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        {currentIndex > 0 && (
          <button onClick={prevSlide} className="mr-2" aria-label="Previous section">
            &uarr;
          </button>
        )}
        {currentIndex < children.length - 1 && (
          <button onClick={nextSlide} aria-label="Next section">
            <ChevronDown className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}