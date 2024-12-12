import React, { useState } from 'react';
import { PDFViewer } from './PDFViewer';
import { motion } from 'framer-motion';
import { X, FileText } from 'lucide-react';

interface FloatingPDFViewerButtonProps {
  pdfUrl: string;
  title?: string;
  className?: string; // Permitir clase personalizada para estilos
}

export const FloatingPDFViewerButton: React.FC<FloatingPDFViewerButtonProps> = ({
  pdfUrl,
  title = 'PDF Document',
  className = '', // Clase personalizada
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Botón con ícono de PDF */}
      <div
        className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition w-[fit-content] h-[fit-content] ${className}`}
      >
        <button onClick={handleOpen} className="text-blue-600 hover:text-blue-800">
          <FileText size={32} /> {/* Ícono de PDF */}
        </button>
      </div>

      {/* Ventana flotante */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // Cierra al hacer clic fuera
        >
          <motion.div
            className="relative bg-white shadow-xl rounded-lg overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
          >

            {/* Componente PDFViewer */}
            <PDFViewer pdfUrl={pdfUrl} title={title} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
