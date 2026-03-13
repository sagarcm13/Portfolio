import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { SimpleIconsLeetcode } from "./Home";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sagar-c-mannannavar-08a002251",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sagarcm13/",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/sagar_c_mannannavar/",
      icon: <SimpleIconsLeetcode />,
      label: "LeetCode",
    },
    {
      href: "https://www.instagram.com/sagar_cm6/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="bg-gray-50/80 dark:bg-surface-dark-alt/80 backdrop-blur-xl py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo */}
            <motion.a
              href="#home"
              className="font-display text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Sagar CM
            </motion.a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200/50 dark:bg-white/5 mb-6" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p className="flex items-center gap-1.5">
              &copy; {new Date().getFullYear()} Sagar C Mannannavar. Built with{" "}
              <FaHeart className="text-red-500 text-xs animate-pulse" /> using
              React
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;