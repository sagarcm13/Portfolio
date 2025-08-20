import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const About = () => {
  const skills = [
    "Proficient in C, Java, JavaScript",
    "React, Node.js, Express.js, Spring Boot",
    "Microsoft Azure (VMs), AWS (EC2)",
    "MongoDB, PostgreSQL, Cloud Firestore, Neo4J",
    "Blockchain & Smart Contracts",
    "Problem-Solving & Analytical Skills",
  ];

  return (
    <section id="about" className="scroll-mt-16">
      <motion.section
        className="p-8 md:p-16 bg-gray-50 min-h-screen flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Introduction Card */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a final-year Computer Science student at BMS College of
              Engineering, Bengaluru. Passionate about software development, I
              am eager to apply my knowledge, enhance my technical skills, and
              contribute to innovative and efficient solutions within a
              collaborative team.
            </p>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <ul className="text-lg text-gray-600 space-y-3">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" />
                <span>sagarcm13@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-600" />
                <span>+91 83103 71912</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaLinkedin className="text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/sagar-c-mannannavar-08a002251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/sagarcm
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaGithub className="text-black" />
                <a
                  href="https://github.com/sagarcm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/sagarcm13
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default About;
