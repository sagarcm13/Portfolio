import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { HiCalendar, HiChip, HiLightningBolt } from "react-icons/hi";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "HPE",
      techStack: "React, Next.js",
      project: "Internal Portal Migration",
      duration: "Aug 2025 - Present",
      type: "Full-time",
      description:
        "Leading the migration of an existing Salesforce CEP portal to Next.js, focusing on improving performance, SEO, and backend efficiency. Implementing SEO-friendly URL patterns and leveraging Next.js caching strategies to significantly reduce backend load. Successfully rebuilding the portal with enhanced scalability and a seamless user experience.",
    },
    {
      title: "Software Engineering Intern",
      company: "HPE",
      techStack: "React, Next.js",
      project: "Internal Portal Migration",
      duration: "Feb 2025 - Aug 2025",
      type: "Internship",
      description:
        "Developed a proof of concept (POC) for migrating an existing React-based internal portal to Next.js, targeting improvements in performance, SEO, and backend efficiency. Implemented SEO-friendly URL patterns and applied Next.js caching techniques to reduce backend load. Delivered a fully rebuilt portal with enhanced scalability and an improved user experience.",
    },
    {
      title: "Freelance Frontend Developer",
      company: "Tridala",
      techStack: "React, Vercel",
      project: "Tridala Insights",
      duration: "Jan 2025",
      type: "Freelance",
      description:
        "Designed and developed a sleek, responsive single-page application for Tridala Pharmaceuticals using React. Built reusable components to ensure scalability, optimized performance for fast load times, and deployed the application seamlessly on Vercel. Delivered an intuitive and smooth user experience across all devices.",
    },
    {
      title: "CodeIO Project Intern",
      company: "CodeIO",
      techStack: "React, Chakra-UI, Node.js, PostgreSQL",
      project: "CIE Marks Portal",
      duration: "Jun 2024 - Sept 2024",
      type: "Internship",
      description:
        "Designed and implemented a digital portal to streamline CIE marks tracking for students and educators. Automated previously manual recording processes, significantly enhancing operational efficiency. Built a robust full-stack solution featuring seamless data management and an intuitive user interface.",
    },
    {
      title: "Freelance Backend Developer",
      company: "Freelance",
      techStack: "Java Spring Boot, Neo4j",
      project: "Full-Stack Application Backend",
      duration: "Feb 2024 - Apr 2024",
      type: "Freelance",
      description:
        "Architected a scalable backend infrastructure for a full-stack web application using Java Spring Boot. Designed and optimized RESTful APIs for seamless frontend integration. Leveraged Neo4j's graph database for efficient data modeling, storage, and retrieval.",
    },
    {
      title: "Freelance Software Engineer",
      company: "Freelance",
      techStack: "Java Spring Boot, MongoDB (Time Series), Java Scheduler",
      project: "WebWatch - Website Monitoring App",
      duration: "Dec 2023 - Feb 2024",
      type: "Freelance",
      description:
        "Developed WebWatch, a real-time website monitoring system that tracks uptime and performance metrics. Implemented automated task scheduling using Spring Boot Scheduler and leveraged MongoDB Time Series Collections for efficient time-stamped data storage. Achieved a 20% improvement in overall monitoring efficiency.",
    },
  ];

  const typeColors = {
    "Full-time":
      "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Internship:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Freelance:
      "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  };

  return (
    <section id="experience" className="scroll-mt-16">
      <div className="relative py-20 px-6 md:px-16 min-h-screen overflow-hidden">
        {/* Background */}
        <div className="orb w-96 h-96 bg-primary-500 top-40 -right-32" />
        <div className="orb w-72 h-72 bg-accent-400 bottom-20 -left-20" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            className="section-heading"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My <span>Experience</span>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-400 opacity-30" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-surface-dark shadow-lg shadow-primary-500/30 z-10" />

                  {/* Card */}
                  <div className="glass-card p-6 md:p-8 card-hover group">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400">
                          <FaBriefcase className="text-sm" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          typeColors[experience.type]
                        }`}
                      >
                        {experience.type}
                      </span>
                    </div>

                    {/* Project & Duration */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400">
                        <HiLightningBolt />
                        <span className="font-medium">
                          {experience.project}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <HiCalendar />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <HiChip className="text-gray-400 dark:text-gray-500" />
                      {experience.techStack.split(", ").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 border border-primary-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
