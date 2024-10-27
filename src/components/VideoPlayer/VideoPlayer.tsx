import React from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, poster }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2 mb-4 bg-gray-50 p-3 rounded-lg">
        <Play className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">{title || 'Video Player'}</h2>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        <video
          className="w-full h-full"
          controls
          poster={poster}
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <span>Audio available</span>
        </div>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          Open in new tab
        </a>
      </div>
    </motion.div>
  );
};