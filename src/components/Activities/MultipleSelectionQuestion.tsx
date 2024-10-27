'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Option {
  id: string
  text: string
}

interface MultipleSelectionQuestionProps {
  question: string
  options: Option[]
  correctAnswerId: string
  onAnswer: (selectedId: string, isCorrect: boolean) => void
}

export default function MultipleSelectionQuestion({ 
  question, 
  options, 
  correctAnswerId, 
  onAnswer 
}: MultipleSelectionQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    if (!hasSubmitted) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (selectedOption) {
      const isCorrect = selectedOption === correctAnswerId
      onAnswer(selectedOption, isCorrect)
      setHasSubmitted(true)
    }
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question}</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <motion.button
            key={option.id}
            className={`w-full text-left p-3 rounded-md ${
              selectedOption === option.id 
                ? hasSubmitted
                  ? option.id === correctAnswerId
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-blue-500 text-white'
                : hasSubmitted && option.id === correctAnswerId
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-800'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOptionSelect(option.id)}
            disabled={hasSubmitted}
          >
            {option.text}
          </motion.button>
        ))}
      </div>
      <motion.button
        className={`mt-4 px-4 py-2 ${
          hasSubmitted ? 'bg-gray-500' : 'bg-green-500'
        } text-white rounded-md`}
        whileHover={hasSubmitted ? {} : { scale: 1.05 }}
        whileTap={hasSubmitted ? {} : { scale: 0.95 }}
        onClick={handleSubmit}
        disabled={!selectedOption || hasSubmitted}
      >
        {hasSubmitted ? 'Submitted' : 'Submit'}
      </motion.button>
    </div>
  )
}