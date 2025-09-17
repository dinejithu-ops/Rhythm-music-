import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../types/music';

interface SongCardProps {
  song: Song;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
  onPause: () => void;
}

export const SongCard: React.FC<SongCardProps> = ({ song, isPlaying, onPlay, onPause }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/60 transition-all duration-300 group cursor-pointer border border-gray-800/50 hover:border-gray-700">
      <div className="relative mb-3">
        <img
          src={song.cover}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <button
            onClick={() => isPlaying ? onPause() : onPlay(song)}
            className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-white text-sm mb-1 truncate">{song.title}</h3>
      <p className="text-gray-400 text-xs truncate">{song.artist}</p>
      <p className="text-gray-500 text-xs mt-1">{song.duration}</p>
    </div>
  );
};