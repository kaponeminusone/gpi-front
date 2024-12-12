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

interface CaseStudyActivityProps {
  width?: string; // Ancho personalizable
  height?: string; // Alto personalizable
}

export default function CaseStudyActivity({ width = '100%', height = 'auto' }: CaseStudyActivityProps): JSX.Element {
  const question: string = "Relaciona las estrategias clave con las empresas que las implementaron.";

  const leftConcepts: Concept[] = [
    { id: 'apple', text: 'Apple Inc.' },
    { id: 'zara', text: 'Zara' },
    { id: 'shared', text: 'Ambas empresas' },
  ];

  const rightConcepts: Concept[] = [
    { id: 'innovation', text: 'Innovación constante en productos y diseño exclusivo.' },
    { id: 'fastFashion', text: 'Gestión eficiente de la cadena de suministro y ciclos cortos de producción.' },
    { id: 'verticalIntegration', text: 'Control total mediante integración vertical.' },
  ];

  const correctRelations: Relation[] = [
    { leftId: 'apple', rightId: 'innovation' },
    { leftId: 'zara', rightId: 'fastFashion' },
    { leftId: 'shared', rightId: 'verticalIntegration' },
  ];

  const [feedback, setFeedback] = useState<string>("");

  const handleAnswer = (_relations: Relation[], isCorrect: boolean): void => {
    if (isCorrect) {
      setFeedback("¡Correcto! Has relacionado correctamente las estrategias con las empresas.");
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
