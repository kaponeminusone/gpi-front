import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface CardSelectionProps {
  question: string;
  options: Array<{
    label: string;
    content: React.ReactNode;
  }>;
  width?: string;
  height?: string;
  className?: string;
}

export const CardSelection: React.FC<CardSelectionProps> = ({
  question,
  options,
  width = '300px',
  height = '400px',
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState(true);

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
    setShowOptions(false);
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setShowOptions(true);
  };

  return (
    <div
      style={{ width, height }}
      className={`bg-white rounded-lg shadow-lg p-6 absolute ${className}`}
    >
      <div className="absolute top-4 right-4">
        <AlertCircle className="w-6 h-6 text-black-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pr-8">{question}</h3>
      
      <AnimatePresence mode="wait">
        {showOptions ? (
          <motion.div
            key="options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 ${
                    selectedIndex === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="p-4 ">
              {selectedIndex !== null && options[selectedIndex].content}
            </div>
            {/* <button
              onClick={handleReset}
              className="text-sm text-blue-500 hover:text-blue-600 mt-4 flex items-center gap-2"
            >
              ← Volver a las opciones
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};