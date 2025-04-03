import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div className="relative">
   
    <div className="min-h-screen bg-[#000] text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Your Perfect Playlist Awaits
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Musify creates personalized playlists that adapt to your mood, activities, and music taste using AI magic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:bg-gray-800/50 transition-all"
            >
              How It Works
            </Link>
          </div>
        </div>
        
        <div className="relative mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg" alt="img" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Musify Stands Out</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge technology with music psychology to create playlists that feel like they were made just for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group">
            <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/40 transition-all">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Recommendations</h3>
            <p className="text-gray-400">
              Our algorithm analyzes your listening habits, mood patterns, and even the weather to suggest perfect tracks.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group">
            <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/40 transition-all">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Dynamic Playlists</h3>
            <p className="text-gray-400">
              Playlists that evolve throughout the day, matching your energy levels and current activity.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition-all group">
            <div className="w-14 h-14 bg-pink-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600/40 transition-all">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Mood Tracking</h3>
            <p className="text-gray-400">
              We learn what music works best for different moods and automatically adjust your playlists accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-3xl my-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Musify Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three simple steps to your perfect personalized playlist experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Step connector lines */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 bg-gray-800/70 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Connect Your Accounts</h3>
            <p className="text-gray-400 text-center">
              Link your Spotify, Apple Music, or YouTube Music to let us analyze your taste.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-4">
                <div className="p-3 bg-gray-900 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-.661.301-1.2-.3-1.44z" />
                  </svg>
                </div>
                <div className="p-3 bg-gray-900 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20zm-2.5-9.5v-1a1 1 0 011-1h3a1 1 0 011 1v1h.5a2.5 2.5 0 012.5 2.5v4a2.5 2.5 0 01-2.5 2.5h-7a2.5 2.5 0 01-2.5-2.5v-4a2.5 2.5 0 012.5-2.5h.5zm1-1.5v1h2v-1h-2zm-1.5 3h-1a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-1a5.5 5.5 0 01-5.5 5.5v-1a4.5 4.5 0 004.5-4.5h-5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 bg-gray-800/70 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Tell Us About You</h3>
            <p className="text-gray-400 text-center">
              Complete a quick music personality quiz to help us understand your unique taste.
            </p>
            <div className="flex justify-center mt-6">
              <div className="p-4 bg-gray-900 rounded-lg">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 bg-gray-800/70 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Enjoy Perfect Playlists</h3>
            <p className="text-gray-400 text-center">
              Receive daily updated playlists that evolve with your mood and activities.
            </p>
            <div className="flex justify-center mt-6">
              <div className="p-4 bg-gray-900 rounded-lg">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of music lovers who found their perfect soundtrack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah K.</h4>
                <p className="text-sm text-gray-400">Music Producer</p>
              </div>
            </div>
            <p className="text-gray-300">
              "Musify understands my taste better than I do. The workout playlists keep me energized like nothing else!"
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mr-4"></div>
              <div>
                <h4 className="font-bold">Miguel R.</h4>
                <p className="text-sm text-gray-400">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-300">
              "The focus playlists have increased my productivity by at least 30%. The algorithm is scarily accurate."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 mr-4"></div>
              <div>
                <h4 className="font-bold">Aisha B.</h4>
                <p className="text-sm text-gray-400">College Student</p>
              </div>
            </div>
            <p className="text-gray-300">
              "I've discovered so many new artists through Musify that I never would have found on my own. It's magical!"
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-3xl p-12 text-center border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Music Experience?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of users who found their perfect soundtrack with Musify.
            </p>
            <Link 
              to="/register" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;