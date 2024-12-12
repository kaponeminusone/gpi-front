import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import NavBar from './NavBar';

interface ScrollContentProps {
  sections: (string | undefined)[];
  children: React.ReactNode[];
}

export default function ScrollContent({ sections, children }: ScrollContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0); // Estado para el índice anterior
  const [direction, setDirection] = useState(0); // Estado para almacenar la dirección
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Estado para la primera carga
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSection = (index: number) => {
    console.log(`Cambiando a la sección: ${index}`);
    setPreviousIndex(currentIndex); // Almacenar el índice actual como índice anterior
    setCurrentIndex(index);
    setDirection(index > currentIndex ? 1 : -1); // Determina la dirección según la navegación
  };

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      goToSection(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSection(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        nextSlide();
      } else if (e.deltaY < -50) {
        prevSlide();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIndex, children.length]);

  // Variantes para las animaciones
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%', // La nueva sección entra desde abajo si va hacia abajo
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%', // Sale hacia arriba si va hacia abajo
      opacity: 0,
    }),
  };

  // Cambiar el estado de la primera carga a false después de la primera renderización
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={containerRef}>
      <NavBar sections={sections} currentIndex={currentIndex} onSectionClick={goToSection} />
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={isFirstLoad ? undefined : "enter"} // No iniciar animación en la primera carga
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
            <ChevronDown className="h-6 w-6 " />
          </button>
        )}
      </div>
    </div>
  );
}
