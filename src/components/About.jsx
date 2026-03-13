import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaCode,
  FaCloud,
  FaDatabase,
  FaCubes,
  FaBrain,
  FaServer,
} from "react-icons/fa";

const About = () => {
  const skills = [
    { icon: <FaCode />, label: "C, Java, JavaScript", color: "from-blue-500 to-cyan-400" },
    { icon: <FaServer />, label: "React, Next.js, Node.js, Express.js, Spring Boot", color: "from-green-500 to-emerald-400" },
    { icon: <FaCloud />, label: "Microsoft Azure (VMs), AWS (EC2)", color: "from-orange-500 to-amber-400" },
    { icon: <FaDatabase />, label: "MongoDB, PostgreSQL, Firestore, Neo4J", color: "from-purple-500 to-violet-400" },
    { icon: <FaCubes />, label: "Blockchain & Smart Contracts", color: "from-pink-500 to-rose-400" },
    { icon: <FaBrain />, label: "Problem-Solving & Analytical Skills", color: "from-indigo-500 to-blue-400" },
  ];

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "sagarcm13@gmail.com",
      href: "mailto:sagarcm13@gmail.com",
      color: "text-red-500 dark:text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: <FaPhoneAlt />,
      label: "+91 83103 71912",
      href: "tel:+918310371912",
      color: "text-green-500 dark:text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <FaLinkedin />,
      label: "linkedin.com/in/sagarcm",
      href: "https://www.linkedin.com/in/sagar-c-mannannavar-08a002251",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FaGithub />,
      label: "github.com/sagarcm13",
      href: "https://github.com/sagarcm13",
      color: "text-gray-800 dark:text-gray-300",
      bgColor: "bg-gray-500/10",
    },
  ];

  return (
    <section id="about" className="scroll-mt-16">
      <div className="relative py-20 px-6 md:px-16 min-h-screen overflow-hidden">
        {/* Background decorations */}
        <div className="orb w-80 h-80 bg-accent-500 -top-20 -right-20" />
        <div className="orb w-64 h-64 bg-primary-400 bottom-40 -left-20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="section-heading"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About <span>Me</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Introduction - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3 glass-card p-8 card-hover"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-lg">
                  ✦
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white">
                  Introduction
                </h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a Computer Science graduate from{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  BMS College of Engineering
                </span>
                , Bengaluru, passionate about building impactful software.
                I began my career as an intern at{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Hewlett Packard Enterprise (HPE)
                </span>
                , and currently work there as a Software Engineering Systems
                professional. This journey has given me hands-on experience
                with large-scale enterprise projects, deepened my technical
                expertise, and sharpened my ability to deliver efficient,
                production-grade solutions. I am driven to keep pushing
                boundaries through continuous learning, innovation, and
                collaboration.
              </p>
            </motion.div>

            {/* Contact Information - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 glass-card p-8 card-hover"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center text-white text-lg">
                  📬
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white">
                  Contact
                </h3>
              </div>
              <ul className="space-y-4">
                {contactItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center ${item.color} text-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm md:text-base">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills - Full width */}
            <motion.div
              className="lg:col-span-5 glass-card p-8 card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center text-white text-lg">
                  🚀
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white">
                  Skills & Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-tag flex items-center gap-3 p-4 rounded-xl bg-gray-50/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-sm flex-shrink-0`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
