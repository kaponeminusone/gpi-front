import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const modules = [
  { id: 'one', number: '01', name: 'Desarrollo de habilidades empresariales', active: true },
  { id: 'two', number: '02', name: 'Planificación estratégica', active: true },
  { id: 'three', number: '03', name: 'Innovación y creatividad', active: true },
  { id: 'four', number: '04', name: 'Gestión financiera', active: true },
  { id: 'five', number: '05', name: 'Marketing y ventas', active: true },
  { id: 'six', number: '06', name: 'Desarrollo de productos/servicios', active: true },
  { id: 'seven', number: '07', name: 'Gestión de recursos humanos', active: true },
  { id: 'eight', number: '08', name: 'Tecnología y transformación digital', active: true },
  { id: 'nine', number: '09', name: 'Networking y colaboración', active: true },
  { id: 'ten', number: '10', name: 'Ética empresarial y responsabilidad social', active: true },
];

const Lobby: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Módulos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modules.map((module) => (
          <motion.div
            key={module.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {module.active ? (
              <Link to={`/module-${module.id}`}>
                <ModuleCard {...module} />
              </Link>
            ) : (
              <ModuleCard {...module} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ModuleCard: React.FC<{ id: string; number: string; name: string; active: boolean }> = ({ number, name, active }) => {
  const bgColor = active ? 'bg-gray-200' : 'bg-gray-300';
  const textColor = active ? 'text-gray-800' : 'text-gray-600';

  return (
    <div className={`${bgColor} rounded-lg shadow-md overflow-hidden transition-colors duration-300 relative`}>
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-300 rounded-t-lg"></div>
      <div className="p-6 flex flex-col items-start justify-center h-48 pt-10">
        <h2 className={`text-4xl font-bold ${textColor} mb-2`}>{number}</h2>
        <p className={`text-lg ${textColor} leading-tight`}>{name}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-300 rounded-b-lg"></div>
    </div>
  );
};

export default Lobby;
