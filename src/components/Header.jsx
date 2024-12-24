// src/components/Header.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0'>
      <nav className="flex justify-between items-center pt-14 pb-8 px-12 bg-white shadow-md">
        <div className="text-xl md:text-2xl font-bold"><Link to='/'>Sagar C Mannannavar</Link></div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-700">About</Link></li>
          <li><Link to="/experience" className="hover:text-gray-700">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-gray-700">Projects</Link></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="hamburger-icon space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-700">Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-700">About</Link></li>
            <li><Link to="/experience" onClick={toggleMenu} className="hover:text-gray-700">Experience</Link></li>
            <li><Link to="/projects" onClick={toggleMenu} className="hover:text-gray-700">Projects</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
