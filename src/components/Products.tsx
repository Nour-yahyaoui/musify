import { useState, useEffect } from 'react';
import DisplaySong from './display';

// Sample music genres data with working image URLs
const musicGenres = [
  {
    id: 0,
    name: 'all',
    description: 'all of the avaible songs from all genres',
    image: 'https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_640.png',
    songs: [
      { id: 101, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', plays: '2.5B' },
      { id: 102, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', plays: '1.8B' },
      { id: 103, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', duration: '2:21', plays: '2.1B' },
      { id: 104, title: 'Watermelon Sugar', artist: 'Harry Styles', duration: '2:54', plays: '1.7B' },
      { id: 105, title: 'Don\'t Start Now', artist: 'Dua Lipa', duration: '3:03', plays: '1.9B' },
      { id: 201, title: 'SICKO MODE', artist: 'Travis Scott', duration: '5:12', plays: '1.2B' },
      { id: 202, title: 'God\'s Plan', artist: 'Drake', duration: '3:18', plays: '1.8B' },
      { id: 203, title: 'HUMBLE.', artist: 'Kendrick Lamar', duration: '2:57', plays: '1.5B' },
      { id: 204, title: 'ROCKSTAR', artist: 'Post Malone', duration: '3:38', plays: '1.3B' },
      { id: 205, title: 'Lose Yourself', artist: 'Eminem', duration: '5:20', plays: '1.1B' },
      { id: 301, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55', plays: '1.6B' },
      { id: 302, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', duration: '5:56', plays: '1.2B' },
      { id: 303, title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:01', plays: '1B' },
      { id: 304, title: 'Hotel California', artist: 'Eagles', duration: '6:30', plays: '800M' },
      { id: 305, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02', plays: '750M' },
      { id: 401, title: 'Starboy', artist: 'The Weeknd, Daft Punk', duration: '3:50', plays: '1.9B' },
      { id: 402, title: 'One More Time', artist: 'Daft Punk', duration: '5:20', plays: '1.1B' },
      { id: 403, title: 'Titanium', artist: 'David Guetta, Sia', duration: '4:05', plays: '1.3B' },
      { id: 404, title: 'Animals', artist: 'Martin Garrix', duration: '3:11', plays: '900M' },
      { id: 405, title: 'Wake Me Up', artist: 'Avicii', duration: '4:09', plays: '1.5B' },
      { id: 601, title: 'Take Five', artist: 'Dave Brubeck', duration: '5:24', plays: '300M' },
      { id: 602, title: 'So What', artist: 'Miles Davis', duration: '9:22', plays: '250M' },
      { id: 603, title: 'My Favorite Things', artist: 'John Coltrane', duration: '13:43', plays: '200M' },
      { id: 604, title: 'Autumn Leaves', artist: 'Cannonball Adderley', duration: '10:57', plays: '180M' },
      { id: 605, title: 'All Blues', artist: 'Miles Davis', duration: '11:33', plays: '220M' },
    ]
  },
  {
    id: 1,
    name: 'phonk',
    description: 'very popular song type!',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 101, title: 'ectremece Terra', artist: 'TRASHXRL', duration: '3:20', plays: '2.5B' },
      { id: 102, title: 'ultra vuk', artist: 'TRASHXRL', duration: '3:23', plays: '1.8B' },
      { id: 103, title: 'EI DO SENSACIO', artist: 'princce', duration: '2:21', plays: '2.1B' },
      { id: 104, title: 'Ender pearl funk', artist: 'Sayfalse, ...', duration: '2:54', plays: '1.7B' },
      { id: 105, title: 'mata rato do casarao 1.0', artist: 'd.silvester', duration: '3:03', plays: '1.9B' }
    ]
  },
  {
    id: 2,
    name: 'Hip-Hop',
    description: 'Urban beats and lyrical flow',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 201, title: 'SICKO MODE', artist: 'Travis Scott', duration: '5:12', plays: '1.2B' },
      { id: 202, title: 'God\'s Plan', artist: 'Drake', duration: '3:18', plays: '1.8B' },
      { id: 203, title: 'HUMBLE.', artist: 'Kendrick Lamar', duration: '2:57', plays: '1.5B' },
      { id: 204, title: 'ROCKSTAR', artist: 'Post Malone', duration: '3:38', plays: '1.3B' },
      { id: 205, title: 'Lose Yourself', artist: 'Eminem', duration: '5:20', plays: '1.1B' }
    ]
  },
  {
    id: 3,
    name: 'Rock',
    description: 'Electric guitars and powerful vocals',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 301, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55', plays: '1.6B' },
      { id: 302, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', duration: '5:56', plays: '1.2B' },
      { id: 303, title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:01', plays: '1B' },
      { id: 304, title: 'Hotel California', artist: 'Eagles', duration: '6:30', plays: '800M' },
      { id: 305, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02', plays: '750M' }
    ]
  },
  {
    id: 4,
    name: 'Electronic',
    description: 'Synthesized sounds and dance beats',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 401, title: 'Starboy', artist: 'The Weeknd, Daft Punk', duration: '3:50', plays: '1.9B' },
      { id: 402, title: 'One More Time', artist: 'Daft Punk', duration: '5:20', plays: '1.1B' },
      { id: 403, title: 'Titanium', artist: 'David Guetta, Sia', duration: '4:05', plays: '1.3B' },
      { id: 404, title: 'Animals', artist: 'Martin Garrix', duration: '3:11', plays: '900M' },
      { id: 405, title: 'Wake Me Up', artist: 'Avicii', duration: '4:09', plays: '1.5B' }
    ]
  },
  {
    id: 5,
    name: 'R&B',
    description: 'Smooth vocals and soulful rhythms',
    image: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 501, title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', plays: '2.1B' },
      { id: 502, title: 'All of Me', artist: 'John Legend', duration: '4:29', plays: '1.8B' },
      { id: 503, title: 'Say So', artist: 'Doja Cat', duration: '3:57', plays: '1.2B' },
      { id: 504, title: 'Adore You', artist: 'Harry Styles', duration: '3:27', plays: '1.4B' },
      { id: 505, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', plays: '2.5B' }
    ]
  },
  {
    id: 6,
    name: 'Jazz',
    description: 'Improvisation and complex harmonies',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 601, title: 'Take Five', artist: 'Dave Brubeck', duration: '5:24', plays: '300M' },
      { id: 602, title: 'So What', artist: 'Miles Davis', duration: '9:22', plays: '250M' },
      { id: 603, title: 'My Favorite Things', artist: 'John Coltrane', duration: '13:43', plays: '200M' },
      { id: 604, title: 'Autumn Leaves', artist: 'Cannonball Adderley', duration: '10:57', plays: '180M' },
      { id: 605, title: 'All Blues', artist: 'Miles Davis', duration: '11:33', plays: '220M' }
    ]
  },
  {
    id: 7,
    name: 'Pop',
    description: 'Catchy melodies and mainstream appeal',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    songs: [
      { id: 701, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', plays: '2.5B' },
      { id: 702, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', plays: '1.8B' },
      { id: 703, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', duration: '2:21', plays: '2.1B' },
      { id: 704, title: 'Watermelon Sugar', artist: 'Harry Styles', duration: '2:54', plays: '1.7B' },
      { id: 705, title: 'Don\'t Start Now', artist: 'Dua Lipa', duration: '3:03', plays: '1.9B' }
    ]
  },
];


const ProductsPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(musicGenres[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSong, setCurrentSong] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [savedSongs, setSavedSongs] = useState(() => {
    const saved = localStorage.getItem('savedSongs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedSongs', JSON.stringify(savedSongs));
  }, [savedSongs]);

  const filteredSongs = selectedGenre.songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
    setCurrentSong(null);
  };

  const handleSaveSong = (song) => {
    if (!savedSongs.some(s => s.id === song.id)) {
      setSavedSongs([...savedSongs, song]);
    }
  };

  const handleRemoveSong = (songId) => {
    setSavedSongs(savedSongs.filter(s => s.id !== songId));
  };

  return (
    <div className="flex h-screen bg-black text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-gray-900/80 border-r border-gray-800 overflow-y-auto flex-shrink-0 hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Music Genres
          </h2>
          <div className="space-y-4">
            {musicGenres.map((genre) => (
              <div
                key={genre.id}
                onClick={() => setSelectedGenre(genre)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${selectedGenre.id === genre.id ? 'bg-gray-800/50 border border-purple-500/30 shadow-lg' : 'bg-gray-800/30 hover:bg-gray-800/50'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={genre.image} 
                      alt={genre.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Music';
                      }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-purple-400 transition-all"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">{genre.name}</h3>
                    <p className="text-xs text-gray-400">{genre.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Genre Selector */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-10">
        <select
          value={selectedGenre.id}
          onChange={(e) => {
            const genre = musicGenres.find(g => g.id === parseInt(e.target.value));
            if (genre) setSelectedGenre(genre);
          }}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {musicGenres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto p-6">
          {/* Genre Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{selectedGenre.name}</h1>
              <p className="text-gray-400">{selectedGenre.description}</p>
            </div>
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search songs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map((song) => {
              const imageUrl = `https://picsum.photos/seed/${song.id}/150/150`;
              
              return (
                <div key={song.id} className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all group overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={imageUrl}
                          alt={`${song.title} album art`}
                          className="w-16 h-16 rounded-lg object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://www.freeiconspng.com/uploads/music-note-png-33.png';
                            e.currentTarget.className = 'w-16 h-16 object-contain p-2';
                          }}
                        />
                        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/20 transition-all"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{song.title}</h3>
                        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <span>{song.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{song.plays} plays</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-4">
                    <div className="flex space-x-3">
                      <button 
                        type='button' 
                        onClick={() => handlePlaySong(song)}
                        className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Play
                      </button>
                      <button 
                        type="button" 
                        onClick={() => handleSaveSong(song)}
                        className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Saved Songs Section */}
          {savedSongs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">⭐ Your Saved Songs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedSongs.map((song) => (
                  <div key={`saved-${song.id}`} className="bg-gray-900/50 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all group overflow-hidden">
                    <div className="p-5">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={`https://picsum.photos/seed/${song.id}/150/150`}
                          alt={`${song.title} album art`}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{song.title}</h3>
                          <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <span>{song.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 pb-4 flex space-x-3">
                      <button 
                        onClick={() => handlePlaySong(song)}
                        className="flex-1 py-2 bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-400 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        Play
                      </button>
                      <button 
                        onClick={() => handleRemoveSong(song.id)}
                        className="flex-1 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredSongs.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium">No songs found</h3>
              <p className="mt-2 text-gray-400">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </div>

      {/* Song Player Modal */}
      {showPlayer && currentSong && (
        <DisplaySong 
          song={currentSong} 
          onClose={handleClosePlayer} 
        />
      )}
    </div>
  );
};

export default ProductsPage;