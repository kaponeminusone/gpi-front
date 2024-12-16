import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, truthTable } from './data/GameData';

export const DecisionGame: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('q1');
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleAnswer = (value: boolean, nextQuestionId: string | null) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      // Rellenar respuestas faltantes con `false` si se omitieron preguntas
      while (updatedAnswers.length < questions.findIndex((q) => q.id === currentQuestionId)) {
        updatedAnswers.push(false);
      }
      updatedAnswers.push(value);
      return updatedAnswers;
    });

    if (nextQuestionId) {
      setCurrentQuestionId(nextQuestionId);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const key = [...answers, ...Array(4 - answers.length).fill(false)]
      .map((val) => (val ? 'true' : 'false'))
      .join(',');
  
    const result = truthTable[key];
    if (!result) {
      console.error(`No result found for key: ${key}`);
    }
    return result || {
      text: 'Error en el resultado',
      description: 'Hubo un problema al calcular el resultado. Verifique las respuestas.',
    };
  };
  

  const resetGame = () => {
    setAnswers([]);
    setCurrentQuestionId('q1');
    setShowResult(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-3xl w-full">
      <div className="bg-white rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-2 text-center">
        Evaluación y Control Estratégico
      </h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Dependiendo de tus respuestas, obtendrás un resultado final. Selecciona cuidadosamente la opción que mejor represente tu decisión.
      </p>
      <div className="mb-6">
        <p className="text-sm text-center mt-2">
          {showResult ? 'Resultados Completados' : `Pregunta ${answers.length + 1} de ${questions.length}`}
        </p>
      </div>
      <AnimatePresence mode="wait">
        {!showResult ? (
          currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {currentQuestion.text}
              </h2>
              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    className="w-full p-4 text-left bg-blue-100 rounded-lg hover:bg-blue-200 transition"
                    onClick={() => handleAnswer(option.value, option.nextQuestionId)}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-3xl font-bold text-green-600">
              {getResult()?.text}
            </h2>
            <p className="text-gray-600 mt-2">{getResult()?.description}</p>
            <motion.button
              onClick={resetGame}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reiniciar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      </div>
    </div>
  );
};
