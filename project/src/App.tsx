import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategorySection } from './components/CategorySection';
import { TrendingSidebar } from './components/TrendingSidebar';
import { MusicPlayer } from './components/MusicPlayer';
import { SubscriptionBanner } from './components/SubscriptionBanner';
import { Footer } from './components/Footer';
import { mockSongs } from './data/mockSongs';
import { Song } from './types/music';

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = useMemo(() => {
    if (!searchQuery) return mockSongs;
    return mockSongs.filter(song =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.album.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const tamilSongs = filteredSongs.filter(song => song.category === 'tamil');
  const englishSongs = filteredSongs.filter(song => song.category === 'english');
  const trendingSongs = mockSongs.filter(song => song.isPopular);
  const latestHits = mockSongs.slice(0, 6);

  const handlePlay = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (!currentSong) return;
    const currentIndex = mockSongs.findIndex(song => song.id === currentSong.id);
    const nextSong = mockSongs[(currentIndex + 1) % mockSongs.length];
    setCurrentSong(nextSong);
  };

  const handlePrevious = () => {
    if (!currentSong) return;
    const currentIndex = mockSongs.findIndex(song => song.id === currentSong.id);
    const prevSong = mockSongs[(currentIndex - 1 + mockSongs.length) % mockSongs.length];
    setCurrentSong(prevSong);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <SubscriptionBanner />
            
            {searchQuery ? (
              <CategorySection
                title={`Search Results for "${searchQuery}"`}
                songs={filteredSongs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            ) : (
              <>
                <CategorySection
                  title="Latest Hits"
                  songs={latestHits}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />

                <CategorySection
                  title="Tamil Songs"
                  songs={tamilSongs}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />

                <CategorySection
                  title="English Songs"
                  songs={englishSongs}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />

                <CategorySection
                  title="Top Tamil"
                  songs={tamilSongs.slice(0, 6)}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />

                <CategorySection
                  title="Top English"
                  songs={englishSongs.slice(0, 6)}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />

                <CategorySection
                  title="Mood Playlists"
                  songs={[...tamilSongs.slice(0, 3), ...englishSongs.slice(0, 3)]}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <TrendingSidebar
              trendingSongs={trendingSongs}
              onPlay={handlePlay}
            />
          </div>
        </div>
      </div>

      <Footer />

      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={handlePause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default App;