import React, { useState } from 'react';
import RelationalQuestion from '../../../../components/Activities/RelationalQuestion';

interface Concept {
  id: string;
  text: string;
}

interface Relation {
  leftId: string;
  rightId: string;
}

interface LeadershipActivityProps {
  width?: string; // Ancho personalizable
  height?: string; // Alto personalizable
}

export default function LeadershipActivity({ width = '100%', height = 'auto' }: LeadershipActivityProps): JSX.Element {
  const question: string = "¡Relaciona los modelos de liderazgo!";

  const leftConcepts: Concept[] = [
    { id: 'transformational', text: 'Liderazgo Transformacional' },
    { id: 'situational', text: 'Liderazgo Situacional' },
    { id: 'ethical', text: 'Liderazgo Ético' },
  ];

  const rightConcepts: Concept[] = [
    { id: 'inspiration', text: 'Enfocado en la inspiración y motivación' },
    { id: 'adaptability', text: 'Adaptabilidad según el contexto' },
    { id: 'morals', text: 'Enfoque en principios y valores morales' },
  ];

  const correctRelations: Relation[] = [
    { leftId: 'transformational', rightId: 'inspiration' },
    { leftId: 'situational', rightId: 'adaptability' },
    { leftId: 'ethical', rightId: 'morals' },
  ];

  const [feedback, setFeedback] = useState<string>("");

  const handleAnswer = (_relations: Relation[], isCorrect: boolean): void => {
    if (isCorrect) {
      setFeedback("¡Correcto! Has relacionado correctamente los conceptos.");
    } else {
      setFeedback("Algunas relaciones no son correctas. Por favor, revisa tus respuestas.");
    }
  };

  return (
    <div
      className="p-6"
      style={{
        width, // Ancho dinámico
        height, // Alto dinámico
      }}
    >
      <RelationalQuestion
        question={question}
        leftConcepts={leftConcepts}
        rightConcepts={rightConcepts}
        correctRelations={correctRelations}
        onAnswer={handleAnswer}
      />
      {feedback && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md text-gray-800">
          {feedback}
        </div>
      )}
    </div>
  );
}
