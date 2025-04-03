import React from 'react';

const DisplaySong = ({ song, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl max-w-md w-full border border-gray-800 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">{song.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={`https://picsum.photos/seed/${song.id}/200/200`}
              alt={`${song.title} cover`}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <p className="text-gray-300">{song.artist}</p>
              <p className="text-gray-500 text-sm">{song.duration}</p>
              <p className="text-gray-500 text-sm">{song.plays} plays</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="h-2 bg-gray-700 rounded-full mb-2">
              <div className="h-2 bg-purple-600 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0:00</span>
              <span>{song.duration}</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-4 rounded-full bg-purple-600 hover:bg-purple-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </button>
            <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySong;