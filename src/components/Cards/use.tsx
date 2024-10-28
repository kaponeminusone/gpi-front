import React from 'react';
import { CardSwap } from './CardSwap';
import { CardFoldChained } from './CardFoldChained';
import { CardFoldHorizontal } from './CardFoldHorizontal';
import { CardSelection } from './CardSelection';
import { CardNote } from './CardNote';
import { CardThinking } from './CardThinking';

function App() {
  const cardData = [
    {
      content: <div className="text-center font-semibold">Fold 1</div>,
    },
    {
      content: <div className="text-center font-semibold">Fold 2</div>,
    },
    {
      content: <div className="text-center font-semibold">Fold 3</div>,
    },
  ];

  const horizontalCardData = [
    {
      content: <div className="text-center font-semibold">Card 1</div>,
    },
    {
      content: <div className="text-center font-semibold">Card 2</div>,
    },
    {
      content: <div className="text-center font-semibold">Card 3</div>,
    },
    {
      content: <div className="text-center font-semibold">Card 4</div>,
    },
  ];

  const selectionOptions = [
    {
      label: "Aún no sé",
      content: "Contenido para 'Aún no sé'",
    },
    {
      label: "Sí",
      content: "Contenido para 'Sí'",
    },
    {
      label: "No",
      content: "Contenido para 'No'",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-32 p-8"> {/* Added padding-top to account for fixed header */}
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardSwap
              frontContent={<div className="text-center">Front Content</div>}
              backContent={<div className="text-center">Back Content</div>}
            />
            
            <div className="h-[600px] flex items-start justify-center">
              <CardFoldChained 
                cards={cardData}
                width="280px"
                height="180px"
              />
            </div>
            
            <CardSelection
              options={selectionOptions}
            />
            
            <CardNote
              content="Estas habilidades incluyen, pero no se limitan a, la capacidad de liderazgo, toma de decisiones, gestión del tiempo, y comunicación"
              author="Kartajaya et al., 2018"
            />
            
            <CardThinking
              content="Las habilidades empresariales representan un conjunto integral de competencias que permiten a los in fomentar el crecimiento sostenido"
              author="Drucker, 2007"
            />
          </div>

          <div className="w-full overflow-x-hidden py-8">
            <CardFoldHorizontal 
              cards={horizontalCardData}
              width="280px"
              height="180px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;