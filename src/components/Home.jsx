/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProfileImage from "./../assets/sagarcm.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiDownload, HiArrowDown } from "react-icons/hi";

const roles = [
  "Full Stack Developer",
  "React & Next.js Specialist",
  "Problem Solver",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="scroll-mt-16 overflow-hidden">
      <div className="relative hero-gradient min-h-[calc(100vh-72px)] flex items-center justify-center py-10 md:py-0">
        {/* Floating orbs */}
        <div className="orb w-72 h-72 bg-primary-500 top-20 -left-20" />
        <div className="orb w-96 h-96 bg-accent-500 bottom-20 -right-20" />
        <div className="orb w-48 h-48 bg-primary-400 top-1/2 left-1/3" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-12 md:py-16 max-w-7xl mx-auto w-full">
          {/* Profile Image */}
          <motion.div
            className="relative group"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Gradient ring behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 rounded-3xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient bg-300%" />
            <div className="relative">
              <img
                src={ProfileImage}
                alt="Sagar C Mannannavar"
                className="w-48 h-48 md:w-80 md:h-80 xl:w-[400px] xl:h-[400px] rounded-3xl object-cover relative z-10"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary-900/20 to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center md:text-left space-y-4 md:space-y-5"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 border border-primary-500/20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              👋 Welcome to my portfolio
            </motion.div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold leading-tight">
              <span className="text-gray-800 dark:text-white">
                Sagar C
              </span>
              <br />
              <span className="gradient-text">Mannannavar</span>
            </h1>

            <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
              CSE Graduate · BMSCE &apos;25 · Software Engineer @ HPE
            </div>

            {/* Animated role */}
            <div className="h-8 overflow-hidden">
              <motion.div
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl font-semibold text-primary-600 dark:text-primary-400"
              >
                {roles[roleIndex]}
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <motion.a
                href="https://drive.google.com/file/d/1g6UdKf0-sUpjcnBA5LMdJoWdXL1oexTN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="text-lg" />
                Download CV
              </motion.a>
              <motion.a
                href="#about"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Info
                <HiArrowDown className="text-lg" />
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 pt-4">
              <SocialIcon
                href="https://www.linkedin.com/in/sagar-c-mannannavar-08a002251"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://github.com/sagarcm13/"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialIcon
                href="https://leetcode.com/u/sagar_c_mannannavar/"
                icon={<SimpleIconsLeetcode />}
                label="LeetCode"
              />
              <SocialIcon
                href="https://www.instagram.com/sagar_cm6/"
                icon={<FaInstagram />}
                label="Instagram"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/40 dark:border-gray-500/40 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 text-xl"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export function SimpleIconsLeetcode(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
      />
    </svg>
  );
}

export default Home;