'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface TrueFalseQuestionProps {
  question: string
  correctAnswer: boolean
  onAnswer: (answer: boolean, isCorrect: boolean) => void
}

export default function TrueFalseQuestion({ question, correctAnswer, onAnswer }: TrueFalseQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleAnswer = (answer: boolean) => {
    if (!hasSubmitted) {
      setSelectedAnswer(answer)
      const isCorrect = answer === correctAnswer
      onAnswer(answer, isCorrect)
      setHasSubmitted(true)
    }
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question}</h2>
      <div className="flex space-x-4">
        <motion.button
          className={`flex-1 p-3 rounded-md ${
            hasSubmitted
              ? selectedAnswer === true
                ? correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : correctAnswer
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-800'
              : selectedAnswer === true
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-800'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(true)}
          disabled={hasSubmitted}
        >
          True
        </motion.button>
        <motion.button
          className={`flex-1 p-3 rounded-md ${
            hasSubmitted
              ? selectedAnswer === false
                ? !correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : !correctAnswer
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-800'
              : selectedAnswer === false
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-800'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(false)}
          disabled={hasSubmitted}
        >
          False
        </motion.button>
      </div>
    </div>
  )
}