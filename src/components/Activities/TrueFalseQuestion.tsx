'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TrueFalseQuestionProps {
  question: string
  correctAnswer: boolean
  onAnswer: (answer: boolean, isCorrect: boolean) => void
}

export default function TrueFalseQuestion({ question, correctAnswer, onAnswer }: TrueFalseQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    // Reset the component state when the question changes
    setSelectedAnswer(null)
    setHasSubmitted(false)
  }, [question])

  const handleAnswer = (answer: boolean) => {
    if (!hasSubmitted) {
      setSelectedAnswer(answer)
      const isCorrect = answer === correctAnswer
      onAnswer(answer, isCorrect)
      setHasSubmitted(true)
    }
  }

  const getButtonClass = (buttonValue: boolean) => {
    if (!hasSubmitted) {
      return selectedAnswer === buttonValue ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
    }
    if (buttonValue === correctAnswer) {
      return 'bg-green-500 text-white'
    }
    return selectedAnswer === buttonValue ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg mb-4 text-gray-800">{question}</h2>
      <div className="flex space-x-4">
        {['True', 'False'].map((label, index) => (
          <motion.button
            key={label}
            className={`flex-1 p-3 rounded-md ${getButtonClass(index === 0)}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAnswer(index === 0)}
            disabled={hasSubmitted}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}