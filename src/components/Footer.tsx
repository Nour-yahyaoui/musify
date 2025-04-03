import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Musify
            </h2>
            <p className="text-sm">
              Discover your next favorite song with our curated music collection from all genres.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaSpotify className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaApple className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Genres</a></li>
              <li><a href="#" className="hover:text-white transition">Popular</a></li>
              <li><a href="#" className="hover:text-white transition">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition">My Library</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-medium mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Profile</a></li>
              <li><a href="#" className="hover:text-white transition">Settings</a></li>
              <li><a href="#" className="hover:text-white transition">Upgrade to Pro</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Sign Out</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest releases and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg text-white font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Musify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="text-sm">Terms</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="text-sm">Privacy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;