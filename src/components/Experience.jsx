const Experience = () => {
    const experiences = [
        {
            title: "Freelancer",
            techStack: "Java Spring-Boot, Java Scheduler, MongoDB Time Series Collection",
            project: "WebWatch Website Monitoring App",
            duration: "Dec 2023 - Feb 2024",
            description: "WebWatch is a robust application designed to efficiently monitor the availability and performance of websites in real-time. By utilizing Spring Boot Scheduler for task scheduling and MongoDB Time Series Collection for efficient data storage and retrieval, WebWatch offers a significant 20% improvement in monitoring efficiency.",
        },
        {
            title: "Freelancer",
            techStack: "Java Spring-Boot, Neo4j Graph Database",
            project: "Backend Development",
            duration: "Feb 2024 - Apr 2024",
            description: "Collaborated on Freelance Projects. Engineered the backend architecture for a full-stack application. Collaborated with front-end developers to ensure seamless API integration.",
        },
        {
            title: "CodeIO Project Intern",
            techStack: "React, NodeJS, Postgres",
            project: "CIE Marks Portal",
            duration: "Jun 2024 - Sept 2024",
            description: "CIE Marks Portal is a digital tool designed to streamline the process of tracking student marks. It simplifies the traditional method of manual marks recording, offering a convenient and efficient solution for both teachers and students.",
        },
    ];

    return (
        <section className="p-8 min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
                        <h4 className="text-xl font-medium text-gray-700 mb-1">{experience.project}</h4>
                        <p className="text-gray-600 mb-2">{experience.duration}</p>
                        <p className="text-gray-700 mb-4">{experience.description}</p>
                        <p className="text-gray-600 font-semibold">Tech Stack:</p>
                        <p className="text-gray-600 mb-2">{experience.techStack}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
