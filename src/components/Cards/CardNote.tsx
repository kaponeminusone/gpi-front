import React from 'react';

interface CardNoteProps {
  content: string;
  author?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const CardNote: React.FC<CardNoteProps> = ({
  content,
  author,
  width = '300px',
  height = '200px',
  className = '',
}) => {
  return (
    <div
      style={{ width, height }}
      className={`bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between ${className}`}
    >
      <p className="text-gray-700">{content}</p>
      {author && (
        <p className="text-sm text-gray-500 mt-4 text-right">— {author}</p>
      )}
    </div>
  );
};