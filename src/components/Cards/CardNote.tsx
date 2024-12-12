import React from 'react';

interface CardNoteProps {
  title?: string; // Título opcional
  content: string;
  author?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const CardNote: React.FC<CardNoteProps> = ({
  title,
  content,
  author,
  width = '300px',
  height = '200px',
  className = '',
}) => {
  return (
    <div
      style={{ width, height }}
      className={`absolute rounded-tl-lg rounded-br-lg shadow-lg p-6 flex flex-col justify-between ${className}`}
    >
      {title && <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>}
      <p className="text-gray-700">{content}</p>
      {author && (
        <p className="text-sm text-gray-500 mt-4 text-right">— {author}</p>
      )}
    </div>
  );
};
