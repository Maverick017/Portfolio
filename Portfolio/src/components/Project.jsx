import React from "react";

const projects = [
    {
      id: 1,
      name: "Movie website",
      technologies: "React, Node",
      github: "https://github.com/IIUC-Syndicate/Movie-Site",
    },
    {
      id: 2,
      name: "Tic-Tac-Toe Game",
      technologies: "HTML, CSS, Javascript",
      github: "https://github.com/Maverick017/Tic-Tac-Toe",
    },
    {
      id: 3,
      name: "BMI-Calculator",
      technologies: "HTML, CSS, Javascript",
      github: "https://github.com/Maverick017/BMI-Calculator",
    },
  ];

export const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};