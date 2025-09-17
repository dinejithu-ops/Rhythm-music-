import React from 'react';
import { TrendingUp, Play } from 'lucide-react';
import { Song } from '../types/music';

interface TrendingSidebarProps {
  trendingSongs: Song[];
  onPlay: (song: Song) => void;
}

export const TrendingSidebar: React.FC<TrendingSidebarProps> = ({ trendingSongs, onPlay }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 sticky top-24">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="h-5 w-5 text-red-400" />
        <h2 className="text-lg font-semibold text-white">Trending Now</h2>
      </div>
      
      <div className="space-y-3">
        {trendingSongs.slice(0, 5).map((song, index) => (
          <div
            key={song.id}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/40 transition-colors cursor-pointer group"
            onClick={() => onPlay(song)}
          >
            <div className="relative">
              <img
                src={song.cover}
                alt={song.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-red-400 font-bold text-sm">#{index + 1}</span>
                <p className="font-medium text-white text-sm truncate">{song.title}</p>
              </div>
              <p className="text-gray-400 text-xs truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};