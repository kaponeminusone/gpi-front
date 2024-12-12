'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TrueFalseQuestion from '../../../../components/Activities/TrueFalseQuestion'

type Question = {
  question: string
  correctAnswer: boolean
}

const questions: Question[] = [
  {
    question: "La comunicación empresarial facilita la coordinación de actividades y la construcción de relaciones con las partes interesadas, según Argenti (2015).",
    correctAnswer: true
  },
  {
    question: "El principio de claridad en la comunicación empresarial asegura que los mensajes sean consistentes con los valores de la organización.",
    correctAnswer: false
  },
  {
    question: "Según Robbins et al. (2019), una comunicación clara reduce la probabilidad de malentendidos y asegura una interpretación uniforme del mensaje.",
    correctAnswer: true
  },
  {
    question: "El uso de apoyos visuales en presentaciones solo tiene como objetivo embellecer el contenido, según Reynolds (2019).",
    correctAnswer: false
  },
  {
    question: "La escucha activa en la negociación implica captar emociones y actitudes subyacentes, según Rogers & Farson (2021).",
    correctAnswer: true
  },
  {
    question: "La flexibilidad y el compromiso son esenciales para encontrar soluciones mutuamente beneficiosas en negociaciones, según Bazerman & Neale (1993).",
    correctAnswer: true
  }
]

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (answer: boolean, isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1)
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      } else {
        setQuizCompleted(true)
      }
    }, 1000) // Delay to show the correct/incorrect answer before moving to the next question
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setCorrectAnswersCount(0)
    setQuizCompleted(false)
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="w-full mt-[-100px] max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Quiz: Comunicación Efectiva</h1>
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
          <TrueFalseQuestion
            question={currentQuestion.question}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
          />
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
