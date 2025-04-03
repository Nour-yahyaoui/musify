import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect with more pronounced shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl py-2 border-b border-gray-800' 
        : 'bg-gray-900/90 py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with modern dark theme */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 group-hover:rotate-12 transition-transform">
             <img src="favicon.svg" alt='logo.svg' />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Musify
            </span>
          </Link>

          {/* Desktop Navigation - Dark sophisticated version */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  location.pathname === link.path
                    ? 'text-white bg-gray-800 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => navigate('/register')}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-md hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.02]"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button - Dark version */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Dark expanded menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => navigate('/register')}
              className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;