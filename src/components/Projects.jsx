import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            projectLink: "https://github.com/sagarcm13/MERN-E-Commerce",
            projectTitle: "MERN E-Commerce",
            techStack: "React JS, NodeJS, ExpressJS, MongoDB",
            description: "A MERN e-commerce refers to an online shopping platform built using the MERN technology stack, which consists of MongoDB (database), Express.js (backend framework), React.js (frontend library), and Node.js (runtime environment), allowing users with functionalities like product browsing, adding items to a cart, checkout, user management, and admin controls, all within a JavaScript-based ecosystem."
        }, {
            projectLink: "https://github.com/sagarcm13/Event-Ticketing-Platform",
            projectTitle: "Event Ticketing Platform",
            techStack: "React JS, Solidity, Hardhat, Sepolia testnet",
            description: "An event ticketing platform is a Blockchain based digital platform that facilitates the buying and selling of tickets for various events, such as concerts, sports events, conferences, festivals, and more. It provides a convenient and efficient way for event organizers to manage ticket sales and for attendees to purchase tickets online."
        }, {
            projectLink: "https://github.com/sagarcm13/Flutter-Attendence-App",
            projectTitle: "Attendity - Attendance Management App",
            techStack: "Flutter, Firebase, Cloud Firestore, Firebase Auth",
            description: "An attendance management app is a digital tool designed to streamline the process of tracking student attendance. It simplifies the traditional method of manual attendance taking, offering a convenient and efficient solution for both teachers and students. Main functionality one click attendance marking feature"
        }, {
            projectLink: "https://github.com/sagarcm13/CIE-Marks-Portal",
            projectTitle: "CIE - Marks Portal",
            techStack: "React JS, Chakra-UI, NodeJS, Postgres",
            description: "An CIE Marks Portal is a digital tool designed to streamline the process of tracking student marks. It simplifies the traditional method of manual marks recording, offering a convenient and efficient solution for both teachers and students."
        }, {
            projectLink: "",
            projectTitle: "WebWatch (Website Monitoring app)",
            techStack: "Java Spring-Boot, Java Schedular, MongoDB Time Series Collection",
            description: "Developed the WebWatch project, leveraging Spring Boot Scheduler and MongoDB Time Series Collection, leading to a 20% improvement in real-time monitoring efficiency. Delivered a flexible solution enabling real-time website addition and removal for monitoring."
        },
    ];

    return (
        <section className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Link to={project.projectLink} target="_blank" rel="noopener noreferrer">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2 hover:underline">{project.projectTitle}</h3>
                        </Link>
                        <h5 className="text-lg font-medium text-gray-700 mb-2">{project.techStack}</h5>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
