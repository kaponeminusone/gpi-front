import React from 'react';
import { AnimatedText } from '../AnimatedText/AnimatedText';

interface CardThinkingProps {
  content: string;
  author?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const CardThinking: React.FC<CardThinkingProps> = ({
  content,
  author,
  width = '300px',
  height = '200px',
  className = '',
}) => {
  return (
    <div
      style={{ width, height }}
      className={`absolute ${className}`}
    >
      {/* Main bubble */}
      <div className="absolute inset-0 bg-white rounded-[30px] shadow-lg p-6">
        {/* Content */}
        <div className="h-full flex flex-col justify-between">
          <p className="text-gray-700">
            <AnimatedText
              text={content}
              type="typewriter"
              delay={0.1}
              duration={0.2}
              className=""
            />
            </p>
          {author && (
            <p className="text-sm text-gray-500 mt-4 text-right">— {author}</p>
          )}
        </div>
      </div>

      {/* Small circles for thought bubble effect */}
      <div className="absolute -bottom-2 right-[40%] w-4 h-4 bg-white rounded-full shadow-lg" />
      <div className="absolute -bottom-5 right-[45%] w-3 h-3 bg-white rounded-full shadow-lg" />
      <div className="absolute -bottom-7 right-[48%] w-2 h-2 bg-white rounded-full shadow-lg" />
    </div>
  );
};