import { motion } from 'framer-motion';
import { Flag, Star, HelpCircle } from 'lucide-react';

type Tab = 'content' | 'objectives' | 'info';

interface OptionsContentProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

interface ContentItem {
  id: string;
  title: string;
  subitems?: { id: string; title: string }[];
}

const content: ContentItem[] = [
  {
    id: '1',
    title: 'Introducción a las Habilidades Empresariales',
    subitems: [
      { id: '1.1', title: 'Conceptos básicos y definiciones' },
      { id: '1.2', title: 'Importancia del liderazgo y la gestión del tiempo' }
    ]
  },
  { id: '2', title: 'Liderazgo y Gestión del Tiempo' },
  { id: '3', title: 'Comunicación Efectiva' },
  { id: '4', title: 'Casos de Estudio y Mejores Prácticas' }
];

export default function OptionsContent({ activeTab, onTabChange }: OptionsContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'content':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {content.map((item) => (
              <div key={item.id} className="space-y-2">
                <h3 className="font-medium text-gray-800">{item.id}. {item.title}</h3>
                {item.subitems && (
                  <div className="pl-4 space-y-1">
                    {item.subitems.map((subitem) => (
                      <p key={subitem.id} className="text-sm text-gray-600">
                        {subitem.id} {subitem.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        );
      case 'objectives':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="font-medium text-gray-800">Objetivos del Curso</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desarrollar habilidades de liderazgo efectivo</li>
              <li>Mejorar la gestión del tiempo y productividad</li>
              <li>Fortalecer la comunicación empresarial</li>
              <li>Aplicar mejores prácticas en casos reales</li>
            </ul>
          </motion.div>
        );
      case 'info':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="font-medium text-gray-800">Información del Curso</h3>
            <p className="text-gray-600">
              Este curso está diseñado para desarrollar habilidades empresariales esenciales
              a través de un enfoque práctico y orientado a resultados. Los participantes
              aprenderán conceptos fundamentales y aplicarán su conocimiento en situaciones
              reales del mundo empresarial.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold">Contenido</h2>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTabChange('info')}
            className={`p-2 rounded-full ${activeTab === 'info' ? 'bg-gray-100' : ''}`}
          >
            <HelpCircle className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTabChange('objectives')}
            className={`p-2 rounded-full ${activeTab === 'objectives' ? 'bg-gray-100' : ''}`}
          >
            <Star className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTabChange('content')}
            className={`p-2 rounded-full ${activeTab === 'content' ? 'bg-gray-100' : ''}`}
          >
            <Flag className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}