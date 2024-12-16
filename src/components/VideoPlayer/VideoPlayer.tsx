import React from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import { Play, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string; // YouTube video URL
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Extract YouTube video ID from the URL
  const getYouTubeId = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  const youtubeOptions = {
    height: '480', // Increased height
    width: '640', // Increased width
    playerVars: {
      autoplay: 0,
    },
  };
  
  return (
    <motion.div
      className="w-[fit-content] p-4 bg-white rounded-lg shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2 mb-4 bg-gray-50 p-3 rounded-lg">
        <Play className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">{title || 'Video Player'}</h2>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden">
        <YouTube videoId={videoId} opts={youtubeOptions} />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <span>Audio available</span>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
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
