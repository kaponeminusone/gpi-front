'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Option {
  id: string
  text: string
}

interface Question {
  question: string
  options: Option[]
  correctAnswerId: string
}

const questions: Question[] = [
  {
    question: '¿Cuál es el primer paso en el proceso de resolución de problemas?',
    options: [
      { id: 'a', text: 'Recolección de datos' },
      { id: 'b', text: 'Observación inicial' },
      { id: 'c', text: 'Definición del problema' },
      { id: 'd', text: 'Validación del problema' },
    ],
    correctAnswerId: 'b',
  },
  {
    question: '¿Qué herramienta evalúa fortalezas, debilidades, oportunidades y amenazas?',
    options: [
      { id: 'a', text: 'Diagrama de Ishikawa' },
      { id: 'b', text: 'Matriz de decisión' },
      { id: 'c', text: 'Análisis FODA' },
      { id: 'd', text: 'Árbol de decisión' },
    ],
    correctAnswerId: 'c',
  },
  {
    question: '¿Qué principio sugiere que el 80% de los problemas se derivan del 20% de las causas?',
    options: [
      { id: 'a', text: 'Análisis de Pareto' },
      { id: 'b', text: 'Árbol de decisión' },
      { id: 'c', text: 'Análisis FODA' },
      { id: 'd', text: 'Diagrama de Ishikawa' },
    ],
    correctAnswerId: 'a',
  },
]

export default function MultipleChoiceQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleSubmit = () => {
    if (!selectedOption) return

    const isCorrect = selectedOption === currentQuestion.correctAnswerId
    if (isCorrect) setCorrectAnswersCount((prev) => prev + 1)

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        setQuizCompleted(true)
      }
    }, 1000) // Delay to show feedback
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setCorrectAnswersCount(0)
    setQuizCompleted(false)
    setSelectedOption(null)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Quiz de Resolución de Problemas</h1>
      {!quizCompleted ? (
        <>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
            <p className="text-sm text-center mt-2">
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">{currentQuestion.question}</h2>
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  className={`w-full text-left p-3 rounded-md border transition-all duration-200 ${
                      selectedOption === option.id
                        ? option.id === currentQuestion.correctAnswerId
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-white text-gray-800 border-gray-300'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option.id)}
                  disabled={!!selectedOption}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
            <motion.button
              className={`mt-4 px-4 py-2 rounded-md text-white ${
                selectedOption ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400'
              }`}
              whileHover={selectedOption ? { scale: 1.05 } : {}}
              whileTap={selectedOption ? { scale: 0.95 } : {}}
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
            </motion.button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">¡Quiz completado!</h2>
          <p className="text-lg">
            Has respondido correctamente {correctAnswersCount} de {questions.length} preguntas.
          </p>
          <motion.button
            onClick={restartQuiz}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reiniciar Quiz
          </motion.button>
        </div>
      )}
    </div>
  )
}
