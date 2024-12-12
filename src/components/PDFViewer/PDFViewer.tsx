import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, FileText } from 'lucide-react';
import './PDFViwer.css'; // Asegúrate de que esta clase esté configurada adecuadamente

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [editingPage, setEditingPage] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(`${pageNumber}`);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight * 0.8; // 80% de la altura del viewport
      setContainerHeight(viewportHeight);
      setScale(viewportHeight / 792); // 792 es la altura estándar de una página A4
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) =>
      Math.min(Math.max(1, prevPageNumber + offset), numPages)
    );
  };

  const handlePageClick = () => {
    setEditingPage(true);
    setInputValue(`${pageNumber}`);
  };

  const handleInputBlur = () => {
    const page = Math.max(1, Math.min(numPages, parseInt(inputValue, 10) || pageNumber));
    setPageNumber(page);
    setEditingPage(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col bg-white shadow-xl rounded-lg"
      style={{ height: '80vh', backgroundColor: 'red' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sección del header y controles (40%) */}
      <div className="header-controls bg-gray-50 p-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">{title || 'PDF Document'}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                -
              </button>
              <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale((prev) => Math.min(2, prev + 0.1))}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                +
              </button>
            </div>
            <a
              href={pdfUrl}
              download
              className="flex w-full gap-1 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {editingPage ? (
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              className="w-20 text-center border border-gray-300 rounded"
            />
          ) : (
            <span
              className="text-sm text-gray-600 cursor-pointer"
              onClick={handlePageClick}
            >
              Page {pageNumber} of {numPages}
            </span>
          )}

          <button
            onClick={() => changePage(1)}
            disabled={pageNumber >= numPages}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sección del PDF (60%) */}
      <div
        className="pdf-viewer bg-gray-100 p-4 overflow-auto"
        style={{ height: `${containerHeight}px` }}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="shadow-lg"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </motion.div>
  );
};
