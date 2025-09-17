export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  category: 'tamil' | 'english';
  isPopular?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  cover: string;
}