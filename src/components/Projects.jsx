import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiChip } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      "projectLink": "https://github.com/sagarcm13/Langchain-graph_AI_Chat_App",
      "projectTitle": "AI Chat Assistant with RAG & LangGraph",
      "techStack": "React, FastAPI, LangChain, LangGraph, Google Gemini API, Redis, ChromaDB, Tailwind CSS",
      "description": "Developed a full-stack AI chatbot with a React (Vite + Tailwind) frontend and FastAPI backend. Implemented LangGraph-based multi-step workflows with LangChain to support intelligent intent detection and modular AI processing. Integrated Redis for persistent session-based chat history, ChromaDB for vector search and RAG, and external APIs for weather data and GitHub repository analysis. The system supports real-time streaming responses, portfolio website analysis, and repository README exploration.",
      "emoji": "🧠",
      "gradient": "from-indigo-500 to-purple-600"
    },
    {
      "projectLink": "https://github.com/sagarcm13/SETS",
      "projectTitle": "SETS - Shubam Employee Transport Services",
      "techStack": "React.js, JavaScript, HTML, CSS",
      "description": "Developed a modern web platform for Shubam Employee Transport Services (SETS) that showcases a car investment opportunity for investors. The application provides transparent insights into vehicle investment plans, expected monthly income, financial breakdowns, ROI comparisons, and risk management details through a responsive and visually engaging interface.",
      "emoji": "🚗",
      "gradient": "from-orange-500 to-red-400"
    },
    {
      "projectLink": "https://github.com/sagarcm13/MERN-E-Commerce",
      "projectTitle": "MERN Electronics E-Commerce",
      "techStack": "React.js, Node.js, Express.js, MongoDB",
      "description": "Developed a full-stack electronics e-commerce platform inspired by modern online stores like Chroma. Built using the MERN stack with features including secure user authentication, product browsing and filtering, cart management, and order placement. Implemented backend APIs for product and order management, MongoDB for data storage, and automated email notifications for order confirmations. The platform also includes an admin dashboard for managing products, users, and customer orders.",
      "emoji": "🛒",
      "gradient": "from-blue-500 to-cyan-400"
    },
    {
      projectLink: "https://github.com/sagarcm13/Event-Ticketing-Platform",
      projectTitle: "Event Ticketing Platform",
      techStack: "React.js, Solidity, Hardhat, Sepolia Testnet",
      description:
        "Built a blockchain-based event ticketing system, enabling secure and transparent ticket sales. Integrated smart contracts to prevent fraud and ensure fair transactions.",
      emoji: "🎫",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      projectLink: "https://github.com/sagarcm13/Flutter-Attendence-App",
      projectTitle: "Attendity",
      techStack: "Flutter, Firebase, Cloud Firestore, Firebase Auth",
      description:
        "Designed an intuitive mobile app for automated attendance tracking. Features one-click attendance marking and real-time synchronization with Firebase Firestore.",
      emoji: "📋",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      projectLink: "https://github.com/sagarcm13/CIE-Marks-Portal",
      projectTitle: "CIE Marks Portal",
      techStack: "React.js, Chakra-UI, Node.js, PostgreSQL",
      description:
        "Developed a web-based system for tracking student marks, eliminating manual record-keeping. Optimized for efficient data entry and retrieval.",
      emoji: "📊",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      projectLink: "",
      projectTitle: "WebWatch",
      techStack: "Java Spring Boot, Java Scheduler, MongoDB Time Series",
      description:
        "Engineered a real-time website monitoring tool with a 20% improvement in efficiency. Implemented automated scheduling and time-series data storage for scalable monitoring.",
      emoji: "👁️",
      gradient: "from-red-500 to-rose-400",
    },
    {
      projectLink: "https://github.com/sagarcm13/Tridala",
      projectTitle: "Tridala Insights",
      techStack: "React, Vercel",
      description:
        "Developed a sleek, responsive single-page application for Tridala pharmaceutical using React. Built reusable components for scalability, optimized performance, and deployed seamlessly on Vercel.",
      emoji: "💊",
      gradient: "from-indigo-500 to-violet-400",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-16">
      <div className="relative py-20 px-6 md:px-16 min-h-screen overflow-hidden">
        {/* Background */}
        <div className="orb w-80 h-80 bg-primary-400 top-20 -left-20" />
        <div className="orb w-96 h-96 bg-accent-500 bottom-40 -right-32" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            className="section-heading"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured <span>Projects</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden card-hover group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Gradient header bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className="p-6">
                  {/* Emoji + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl mt-0.5">{project.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.projectTitle}
                      </h3>
                    </div>
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                        aria-label={`View ${project.projectTitle} on GitHub`}
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <HiChip className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    {project.techStack.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link for repos */}
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
                    >
                      View on GitHub
                      <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
