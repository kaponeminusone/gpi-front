import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, truthTable } from './data/GameData';
import { Brain, RefreshCw } from 'lucide-react';

export default function DecisionGame() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('q1');
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  const handleAnswer = (value: boolean, nextQuestionId: string | null) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (nextQuestionId) {
      setCurrentQuestionId(nextQuestionId);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const key = answers.join(',');
    return truthTable[key];
  };

  const resetGame = () => {
    setAnswers([]);
    setCurrentQuestionId('q1');
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800 ml-3">Decision Game</h1>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentQuestion && (
                  <>
                    <h2 className="text-xl font-semibold text-gray-700 mb-6">
                      {currentQuestion.text}
                    </h2>
                    <div className="space-y-4">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={index}
                          className="w-full p-4 text-left rounded-lg border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(option.value, option.nextQuestionId)}
                        >
                          {option.text}
                        </motion.button>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-purple-800 mb-3">
                    {getResult().text}
                  </h2>
                  <p className="text-purple-600">{getResult().description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  onClick={resetGame}
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Jugar de nuevo
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center text-sm text-gray-500">
            Pregunta {questions.findIndex(q => q.id === currentQuestionId) + 1} de {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
}