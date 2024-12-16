import { useState } from 'react';
import RelationalQuestion from '../../../../components/Activities/RelationalQuestion';

interface Concept {
  id: string;
  text: string;
}

interface Relation {
  leftId: string;
  rightId: string;
}

export default function StrategicAnalysisActivity(): JSX.Element {
  const question: string = "Relaciona las herramientas de análisis estratégico con sus descripciones.";

  const leftConcepts: Concept[] = [
    { id: 'pestel', text: 'Análisis PESTEL' },
    { id: 'porter', text: 'Modelo de las Cinco Fuerzas de Porter' },
    { id: 'swot', text: 'Análisis FODA' },
    { id: 'value_chain', text: 'Cadena de Valor de Porter' },
    { id: 'vrio', text: 'Análisis VRIO' },
  ];

  const rightConcepts: Concept[] = [
    { id: 'pestel_desc', text: 'Evaluar factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.' },
    { id: 'porter_desc', text: 'Evaluar el poder de proveedores, clientes, amenazas de sustitutos y rivales.' },
    { id: 'swot_desc', text: 'Identificar fortalezas, debilidades, oportunidades y amenazas.' },
    { id: 'value_chain_desc', text: 'Analizar actividades primarias y de apoyo que crean valor.' },
    { id: 'vrio_desc', text: 'Evaluar recursos según valor, rareza, imitabilidad y organización.' },
  ];

  const correctRelations: Relation[] = [
    { leftId: 'pestel', rightId: 'pestel_desc' },
    { leftId: 'porter', rightId: 'porter_desc' },
    { leftId: 'swot', rightId: 'swot_desc' },
    { leftId: 'value_chain', rightId: 'value_chain_desc' },
    { leftId: 'vrio', rightId: 'vrio_desc' },
  ];

  const [feedback, setFeedback] = useState<string>("");

  const handleAnswer = (_relations: Relation[], isCorrect: boolean): void => {
    if (isCorrect) {
      setFeedback("¡Correcto! Has relacionado correctamente las herramientas con sus descripciones.");
    } else {
      setFeedback("Algunas relaciones no son correctas. Por favor, revisa tus respuestas.");
    }
  };

  return (
    <div className="p-6">
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
