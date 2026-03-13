import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "about", "experience", "projects"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-display text-xl md:text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sagar CM
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.path.slice(1)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeSection === link.path.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
          <li className="ml-4">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={22}
            color="currentColor"
            rounded
          />
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden glass border-t border-gray-200/30 dark:border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center space-y-1 py-4">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={link.path}
                    onClick={toggleMenu}
                    className={`block px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      activeSection === link.path.slice(1)
                        ? "text-primary-600 dark:text-primary-400 bg-primary-500/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
