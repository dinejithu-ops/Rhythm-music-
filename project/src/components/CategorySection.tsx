import React from 'react';
import { SongCard } from './SongCard';
import { Song } from '../types/music';

interface CategorySectionProps {
  title: string;
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
  onPause: () => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  songs,
  currentSong,
  isPlaying,
  onPlay,
  onPause
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 px-4 sm:px-0">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={currentSong?.id === song.id && isPlaying}
            onPlay={onPlay}
            onPause={onPause}
          />
        ))}
      </div>
    </section>
  );
};