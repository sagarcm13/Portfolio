import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            projectLink: "https://github.com/sagarcm13/MERN-E-Commerce",
            projectTitle: "MERN E-Commerce",
            techStack: "React.js, Node.js, Express.js, MongoDB",
            description: "Developed a full-stack e-commerce platform using the MERN stack. Features include product browsing, cart management, user authentication, and an admin dashboard for order management.",
        },
        {
            projectLink: "https://github.com/sagarcm13/Event-Ticketing-Platform",
            projectTitle: "Event Ticketing Platform",
            techStack: "React.js, Solidity, Hardhat, Sepolia Testnet",
            description: "Built a blockchain-based event ticketing system, enabling secure and transparent ticket sales. Integrated smart contracts to prevent fraud and ensure fair transactions.",
        },
        {
            projectLink: "https://github.com/sagarcm13/Flutter-Attendence-App",
            projectTitle: "Attendity - Attendance Management App",
            techStack: "Flutter, Firebase, Cloud Firestore, Firebase Auth",
            description: "Designed an intuitive mobile app for automated attendance tracking. Features one-click attendance marking and real-time synchronization with Firebase Firestore.",
        },
        {
            projectLink: "https://github.com/sagarcm13/CIE-Marks-Portal",
            projectTitle: "CIE - Marks Portal",
            techStack: "React.js, Chakra-UI, Node.js, PostgreSQL",
            description: "Developed a web-based system for tracking student marks, eliminating manual record-keeping. Optimized for efficient data entry and retrieval.",
        },
        {
            projectLink: "",
            projectTitle: "WebWatch - Website Monitoring App",
            techStack: "Java Spring Boot, Java Scheduler, MongoDB Time Series",
            description: "Engineered a real-time website monitoring tool with a 20% improvement in efficiency. Implemented automated scheduling and time-series data storage for scalable monitoring.",
        },
        {
            projectLink: "https://github.com/sagarcm13/Tridala",
            projectTitle: "Tridala Insights",
            techStack: "React, Vercel",
            description: "Developed a sleek, responsive single-page application for Tridala pharmaceutical using React. Built reusable components for scalability, optimized performance, and deployed seamlessly on Vercel. Ensured an intuitive and smooth user experience across all devices.",
        },
    ];

    return (
        <motion.section 
            className="p-8 bg-gray-50 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }} // Faster fade-in
        >
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }} // Faster title animation
            >
                Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }} // Faster card stagger effect
                        whileHover={{ scale: 1.05 }} // Subtle hover effect
                    >
                        {project.projectLink ? (
                            <Link to={project.projectLink} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-2 hover:underline">
                                    {project.projectTitle}
                                </h3>
                            </Link>
                        ) : (
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.projectTitle}</h3>
                        )}
                        <h5 className="text-lg font-medium text-gray-600 mb-2">{project.techStack}</h5>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;