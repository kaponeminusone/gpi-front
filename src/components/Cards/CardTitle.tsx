import React from 'react';

interface CardTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`relative p-6 flex flex-col items-center justify-center ${className}`}>
      <h1 className="text-4xl font-bold text-gray-800 text-center">{title}</h1>
      {subtitle && (
        <h2 className="text-2xl text-gray-600 mt-2 text-center">{subtitle}</h2>
      )}
    </div>
  );
};
