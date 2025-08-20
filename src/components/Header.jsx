// src/components/Header.js
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyle = "text-black hover:text-blue-600";
  const links = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 md:py-6 px-6 md:px-12 bg-white shadow-md md:shadow-none">
        {/* Logo / Name */}
        <div className="text-lg md:text-2xl font-bold">
          <a href="#home">Sagar C Mannannavar</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.path} className={navStyle}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-lg flex items-center">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} />
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path} onClick={toggleMenu} className={navStyle}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
