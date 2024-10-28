import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface CardSelectionProps {
  options: Array<{
    label: string;
    content: React.ReactNode;
  }>;
  width?: string;
  height?: string;
  className?: string;
}

export const CardSelection: React.FC<CardSelectionProps> = ({
  options,
  width = '300px',
  height = '400px',
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div
      style={{ width, height }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedIndex === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-4"
      >
        {selectedIndex !== null && options[selectedIndex].content}
      </motion.div>
    </div>
  );
};