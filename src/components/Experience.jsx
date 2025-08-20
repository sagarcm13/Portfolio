import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            title: "Freelance Frontend Developer",
            techStack: "React, Vercel",
            project: "Tridala Insights",
            duration: "Jan 2025",
            description:
                "Developed a sleek, responsive single-page application for Tridala pharmaceuticals using React. Built reusable components for scalability, optimized performance, and deployed seamlessly on Vercel. Ensured an intuitive and smooth user experience across all devices.",
        },
        {
            title: "CodeIO Project Intern",
            techStack: "React, Chakra-UI, Node.js, PostgreSQL",
            project: "CIE Marks Portal",
            duration: "Jun 2024 - Sept 2024",
            description:
                "Designed and implemented a digital portal to streamline student mark tracking. Automated manual recording processes, enhancing efficiency for educators and students. Developed a robust full-stack solution with seamless data management.",
        },
        {
            title: "Freelance Backend Developer",
            techStack: "Java Spring Boot, Neo4j",
            project: "Full-Stack Application Backend",
            duration: "Feb 2024 - Apr 2024",
            description:
                "Architected a scalable backend infrastructure for a full-stack web application. Designed and optimized APIs for seamless frontend integration. Leveraged Neo4j for efficient graph-based data storage and retrieval.",
        },
        {
            title: "Freelance Software Engineer",
            techStack: "Java Spring Boot, MongoDB (Time Series), Java Scheduler",
            project: "WebWatch - Website Monitoring App",
            duration: "Dec 2023 - Feb 2024",
            description:
                "Developed WebWatch, a real-time website monitoring system that tracks performance and uptime. Implemented automated task scheduling with Spring Boot Scheduler and leveraged MongoDB Time Series Collection for efficient data storage. Improved monitoring efficiency by 20%.",
        },
    ];

    return (
        <section id="experience" className="scroll-mt-16">
            <motion.section
                className="p-8 bg-gray-50 min-h-screen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }} // triggers only when 20% in view
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                                {experience.title}
                            </h3>
                            <h4 className="text-lg font-medium text-gray-700">
                                {experience.project}
                            </h4>
                            <p className="text-sm text-gray-500 mb-3">{experience.duration}</p>
                            <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                            <p className="text-gray-600 font-semibold mt-2">Tech Stack:</p>
                            <p className="text-gray-500">{experience.techStack}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </section>
    );
};

export default Experience;
