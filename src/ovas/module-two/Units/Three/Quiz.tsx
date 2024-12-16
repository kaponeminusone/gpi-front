
import { useState } from 'react'
import { motion } from 'framer-motion'
import TrueFalseQuestion from '../../../../components/Activities/TrueFalseQuestion'

type Question = {
  question: string
  correctAnswer: boolean
}

const questions: Question[] = [
  {
    question: "La formulación de estrategias define el rumbo de la organización y cómo alcanzará sus metas.",
    correctAnswer: true
  },
  {
    question: "Los objetivos estratégicos no necesitan estar alineados con la misión y visión de la organización.",
    correctAnswer: false
  },
  {
    question: "La adaptabilidad es un aspecto clave en los objetivos estratégicos, según Johnson et al. (2009).",
    correctAnswer: true
  },
  {
    question: "Reducir el consumo de energía en un 25% es un ejemplo de un objetivo estratégico de sostenibilidad.",
    correctAnswer: true
  },
  {
    question: "Un buen plan de acción no incluye la definición de hitos ni plazos específicos.",
    correctAnswer: false
  },
  {
    question: "El análisis continuo y la flexibilidad son fundamentales para ajustar los planes de acción según Mintzberg et al. (2005).",
    correctAnswer: true
  },
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
    }, 1000) // Delay para mostrar respuesta correcta/incorrecta antes de la siguiente pregunta
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
      <h1 className="text-2xl font-bold text-center mb-6">Quiz: Formulación de Estrategias</h1>
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
