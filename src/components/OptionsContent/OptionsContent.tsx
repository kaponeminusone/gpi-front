import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importa el componente Link

type Tab = 'content' | 'objectives' | 'info';

interface ContentItem {
  id: string;
  title: string;
  route: string; // Añade un campo de ruta
  subitems?: { id: string; title: string }[];
}

interface ObjectivesItem {
  id: string;
  title: string;
}

interface OptionsContentProps {
  content: ContentItem[];
  objectives: ObjectivesItem[];
  courseInfo: string;
}
export default function OptionsContent({ content, objectives, courseInfo }: OptionsContentProps) {
  const [activeTab, setActiveTab] = useState<Tab>('content');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'content':
        return 'Contenido del Curso';
      case 'objectives':
        return 'Objetivos del Curso';
      case 'info':
        return 'Información del Curso';
      default:
        return 'Contenido';
    }
  };

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
                <Link to={item.route} className="font-medium text-gray-800 hover:underline">
                  {item.id}. {item.title}
                </Link>
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
            <ul className="list-disc pl-5 space-y-2">
              {objectives.map((objective) => (
                <li key={objective.id}>{objective.title}</li>
              ))}
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
            <p className="text-gray-600">{courseInfo}</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold">{getSectionTitle()}</h2>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('info')}
            className={`p-2 rounded-full ${activeTab === 'info' ? 'bg-gray-100' : ''}`}
          >
            <HelpCircle className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('objectives')}
            className={`p-2 rounded-full ${activeTab === 'objectives' ? 'bg-gray-100' : ''}`}
          >
            <Star className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('content')}
            className={`p-2 rounded-full ${activeTab === 'content' ? 'bg-gray-100' : ''}`}
          >
            <Flag className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      <div className="max-h-[450px] overflow-y-auto pr-2">
        {renderContent()}
      </div>
    </div>
  );
}