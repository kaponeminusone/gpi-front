'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface Concept {
  id: string
  text: string
}

interface Relation {
  leftId: string
  rightId: string
}

interface RelationalQuestionProps {
  question: string
  leftConcepts: Concept[]
  rightConcepts: Concept[]
  correctRelations: Relation[]
  onAnswer: (relations: Relation[], isCorrect: boolean) => void
}

const colors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-orange-500',
]

export default function RelationalQuestion({ 
  question, 
  leftConcepts, 
  rightConcepts, 
  correctRelations, 
  onAnswer 
}: RelationalQuestionProps) {
  const [relations, setRelations] = useState<Relation[]>([])
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const relationColors = useMemo(() => {
    return relations.reduce((acc, relation, index) => {
      acc[relation.leftId] = colors[index % colors.length]
      acc[relation.rightId] = colors[index % colors.length]
      return acc
    }, {} as Record<string, string>)
  }, [relations])

  const handleLeftSelect = (id: string) => {
    if (!hasSubmitted) {
      setSelectedLeft(id)
    }
  }

  const handleRightSelect = (id: string) => {
    if (!hasSubmitted && selectedLeft) {
      setRelations(prev => {
        const newRelations = prev.filter(relation => relation.leftId !== selectedLeft && relation.rightId !== id)
        return [...newRelations, { leftId: selectedLeft, rightId: id }]
      })
      setSelectedLeft(null)
    }
  }

  const handleSubmit = () => {
    if (relations.length === leftConcepts.length && !hasSubmitted) {
      const isCorrect = correctRelations.every(correct => 
        relations.some(relation => 
          relation.leftId === correct.leftId && relation.rightId === correct.rightId
        )
      )
      onAnswer(relations, isCorrect)
      setHasSubmitted(true)
    }
  }

  const getButtonColor = (id: string) => {
    if (hasSubmitted) {
      const userRelation = relations.find(r => r.leftId === id || r.rightId === id)
      const correctRelation = correctRelations.find(r => r.leftId === id || r.rightId === id)
      if (userRelation && correctRelation) return 'bg-green-500 text-white'
      if (userRelation) return 'bg-red-500 text-white'
      return 'bg-gray-300 text-gray-800'
    }
    return relationColors[id] || 'bg-gray-300 text-gray-800'
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question}</h2>
      <div className="flex justify-between space-x-4">
        <div className="w-1/2 space-y-2">
          {leftConcepts.map((concept) => (
            <motion.button
              key={concept.id}
              className={`w-full text-left p-3 rounded-md ${getButtonColor(concept.id)} ${
                selectedLeft === concept.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLeftSelect(concept.id)}
              disabled={hasSubmitted}
            >
              {concept.text}
            </motion.button>
          ))}
        </div>
        <div className="w-1/2 space-y-2">
          {rightConcepts.map((concept) => (
            <motion.button
              key={concept.id}
              className={`w-full text-left p-3 rounded-md ${getButtonColor(concept.id)}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRightSelect(concept.id)}
              disabled={hasSubmitted}
            >
              {concept.text}
            </motion.button>
          ))}
        </div>
      </div>
      <motion.button
        className={`mt-4 px-4 py-2 ${
          hasSubmitted || relations.length !== leftConcepts.length ? 'bg-gray-500' : 'bg-green-500'
        } text-white rounded-md`}
        whileHover={hasSubmitted ? {} : { scale: 1.05 }}
        whileTap={hasSubmitted ? {} : { scale: 0.95 }}
        onClick={handleSubmit}
        disabled={hasSubmitted || relations.length !== leftConcepts.length}
      >
        {hasSubmitted ? 'Submitted' : 'Submit'}
      </motion.button>
    </div>
  )
}