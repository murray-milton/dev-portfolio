import React from 'react';
import proj1 from '../assets/proj1.svg';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

const projects = [
  {
    id: 1,
    title: 'Vaulty DLP Scanner',
    image: proj1,
    description:
      'A privacy-first Data Loss Prevention (DLP) tool that scans documents for PII locally. Features a decoupled architecture for memory optimization, unit-tested regex heuristics, and interactive risk visualization.',
    tech: 'Python · Streamlit · Pandas/Altair · CI/CD · Memory Optimization',
    github: 'https://github.com/murray-milton/vaulty-dlp-scanner',
    demo: 'https://vaultydlpscanner.streamlit.app/',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    image: proj2,
    description:
      'A responsive personal developer portfolio showcasing my projects, background, and technical skills with a clean modern interface.',
    tech: 'React · JavaScript · Tailwind CSS · GitHub Pages',
    github: 'https://github.com/murray-milton/dev-portfolio',
    demo: 'https://murray-milton.github.io/dev-portfolio/',
  },
  {
    id: 3,
    title: 'FastAPI Starter API',
    image: proj3,
    description:
      'A backend starter template focused on clean architecture, authentication, validation, and predictable REST API patterns.',
    tech: 'Python · FastAPI · JWT Auth · PostgreSQL',
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: 'Analytics Dashboard UI',
    image: proj4,
    description:
      'A sleek, responsive front-end dashboard featuring reusable components, dark mode, and interactive visual layouts.',
    tech: 'React · TypeScript · Tailwind CSS',
    github: null,
    demo: null,
  },
  {
    id: 5,
    title: 'Developer Automation Tool',
    image: proj5,
    description:
      'A CLI-style automation tool designed to streamline repetitive developer workflows like file generation and project scaffolding.',
    tech: 'Node.js · JavaScript · GitHub Actions',
    github: null,
    demo: null,
  },
  {
    id: 6,
    title: 'Fitness & Habit Tracker',
    image: proj6,
    description:
      'A personal wellness tracker combining fitness goals, habit streaks, and daily reflections into one motivational interface.',
    tech: 'React · Backend TBD',
    github: null,
    demo: null,
  },
];

function Work() {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            // UPDATED: Increased height to 300px (mobile) and 350px (desktop) to fit text
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                      mx-auto content-div h-[300px] md:h-[350px] bg-cover relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay - UPDATED: Darker background (90% opacity) for better text readability */}
            <div
              className="opacity-0 group-hover:opacity-100 bg-[#0a192f]/90 absolute inset-0 flex flex-col 
                            justify-center items-center px-4 text-center transition-opacity duration-300"
            >
              <span className="text-2xl font-bold text-white tracking-wider">
                {project.title}
              </span>

              {/* UPDATED: Added leading-relaxed for readability and padding */}
              <p className="text-sm text-gray-100 mt-2 py-2 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-[#ccd6f6] font-mono mt-1 mb-4">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm hover:bg-gray-200 transition-colors">
                      View Code
                    </button>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-2 bg-transparent border border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-colors">
                      Live Demo
                    </button>
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="mt-2 text-xs uppercase tracking-wide text-gray-400 border border-gray-600 rounded px-2 py-1">
                    In Development
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
