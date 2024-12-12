import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import OptionsContent from '../OptionsContent/OptionsContent';

interface HomeContentProps {
  title: string;
  email: string;
  name: string;
  hours: number;
  activities: number;
  children: React.ReactNode;
}

export default function HomeContent({ title, email, name, hours, activities, children }: HomeContentProps) {
  return (
    <div className="min-h-screen bg-gray-100 relative h-screen flex flex-col overflow-hidden z-[0]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gray-800 text-white p-6 rounded-b-3xl shadow-lg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              {/* <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-gray-700 rounded-lg mb-4"
              /> */}
              <div className="space-y-1">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-gray-300 text-sm">{name}</p>
                <p className="text-gray-400 text-sm">{email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-4 rounded-lg text-center min-w-[120px]"
              >
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">{hours}</p>
                <p className="text-sm text-gray-300">horas de trabajo</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-4 rounded-lg text-center min-w-[120px]"
              >
                <BookOpen className="w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">{activities}</p>
                <p className="text-sm text-gray-300">actividades</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl px-4 py-8 ml-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
         {children}
        </motion.div>
      </div>
    </div>
  );
}