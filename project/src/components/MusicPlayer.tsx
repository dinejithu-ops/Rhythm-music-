import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from 'lucide-react';
import { Song } from '../types/music';

interface MusicPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrevious
}) => {
  const [progress, setProgress] = useState(45);
  const [volume, setVolume] = useState(75);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: no repeat, 1: repeat all, 2: repeat one

  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 px-4 py-3 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>1:23</span>
            <span>{currentSong.duration}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1 cursor-pointer">
            <div 
              className="bg-blue-400 h-1 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Current Song Info */}
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium text-sm truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
            </div>
            <button className="text-gray-400 hover:text-red-400 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mx-8">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`${isShuffled ? 'text-blue-400' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              <Shuffle className="h-5 w-5" />
            </button>
            <button
              onClick={onPrevious}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="h-6 w-6" />
            </button>
            <button
              onClick={isPlaying ? onPause : onPlay}
              className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
            </button>
            <button
              onClick={onNext}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="h-6 w-6" />
            </button>
            <button
              onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
              className={`${repeatMode > 0 ? 'text-blue-400' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              <Repeat className="h-5 w-5" />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <Volume2 className="h-5 w-5 text-gray-400" />
            <div className="w-20 bg-gray-700 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};