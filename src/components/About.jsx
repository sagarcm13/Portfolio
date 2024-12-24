const About = () => {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h3>
          <p className="text-lg text-gray-600">
          I am a final year Computer Science student at BMS College of Engineering, Bengaluru. I am passionate about software development and eager to apply my foundational knowledge in software development, enhance my technical skills, and contribute to building innovative and efficient solutions within a collaborative and dynamic team environment.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <ul className="text-lg text-gray-600 space-y-2">
            <li><strong>Email:</strong> sagarcm13@gmail.com</li>
            <li><strong>Phone:</strong> +91 83103 71912</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sagar-c-mannannavar-08a002251" className="text-blue-600 hover:underline">linkedin.com/in/sagarcm</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/sagarcm13" className="text-blue-600 hover:underline">github.com/sagarcm13</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Proficient in Java, JavaScript, React JS, Node</li>
            <li>Experienced with React, Node.js, and Express.js</li>
            <li>Worked with Microsoft Azure, Amazon AWS</li>
            <li>Familiar with MongoDB, PostgreSQL, and Firebase</li>
            <li>Knowledge of blockchain technologies and smart contract development</li>
            <li>Strong problem-solving and analytical skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
