import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Our Music Revolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're transforming how people discover and experience music through AI-powered personalization
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Why We Started
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              In a world of endless music choices, we noticed people spending more time searching for songs than actually listening. 
              Our founders—music lovers and data scientists—set out to solve this problem.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Musify was born from a simple idea: what if your playlists could understand you as well as your best friend does?
            </p>
            <Link 
              to="/register" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              Join the Revolution
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                
               <img src="https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190_1280.jpg" alt="img" />

              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full filter blur-xl z-0"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900/50 to-black rounded-3xl my-10 border border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Visionaries</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate music lovers and tech innovators building the future of audio experiences
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all group text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-purple-900 to-blue-900 text-transparent bg-clip-text">
                  JD
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Jordan Davis</h3>
            <p className="text-purple-400 mb-3">Founder & CEO</p>
            <p className="text-gray-400 text-sm">
              Former music producer turned tech entrepreneur with 15+ years in audio innovation
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all group text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 p-1 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-blue-900 to-teal-900 text-transparent bg-clip-text">
                  AM
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Aisha Mohammed</h3>
            <p className="text-blue-400 mb-3">Chief AI Scientist</p>
            <p className="text-gray-400 text-sm">
              Machine learning expert specializing in audio pattern recognition
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all group text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-600 to-red-600 p-1 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-pink-900 to-red-900 text-transparent bg-clip-text">
                  EC
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Elena Chen</h3>
            <p className="text-pink-400 mb-3">Product Designer</p>
            <p className="text-gray-400 text-sm">
              Creates intuitive experiences that connect people with music
            </p>
          </div>
          
          {/* Team Member 4 */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500 transition-all group text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 p-1 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-green-900 to-emerald-900 text-transparent bg-clip-text">
                  TK
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Tomás Keller</h3>
            <p className="text-green-400 mb-3">Head of Music Curation</p>
            <p className="text-gray-400 text-sm">
              Former radio DJ with encyclopedic knowledge of global music trends
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Beliefs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide everything we do at Musify
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all group">
            <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/40 transition-all mx-auto">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Personalization First</h3>
            <p className="text-gray-400 text-center">
              We believe every listener deserves a unique experience tailored to their mood, taste, and moment
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all group">
            <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/40 transition-all mx-auto">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Artist Support</h3>
            <p className="text-gray-400 text-center">
              Our algorithms help emerging artists find their perfect audience while respecting creator rights
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all group">
            <div className="w-14 h-14 bg-pink-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600/40 transition-all mx-auto">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Privacy Promise</h3>
            <p className="text-gray-400 text-center">
              Your data belongs to you. We use it only to improve your experience and never sell it
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Music Like Never Before?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join our community of music lovers and let our AI create your perfect soundtrack
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/products" 
                className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:bg-gray-800/50 transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;