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
      'A local-first data loss prevention tool that scans files for sensitive patterns (PII) using rule-based detection and privacy-preserving workflows.',
    tech: 'Python · Streamlit · Regex · pdfminer.six · DevSecOps',
    github: 'https://github.com/murray-milton/vaulty-dlp-scanner',
    demo: null,
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
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                      mx-auto content-div h-[200px] bg-cover relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                            justify-center items-center px-4 text-center transition-opacity">
              <span className="text-2xl font-bold text-white tracking-wider">
                {project.title}
              </span>

              <p className="text-sm text-gray-100 mt-2">{project.description}</p>

              <p className="text-xs text-gray-200 mt-2">{project.tech}</p>

              {/* Buttons */}
              <div className="pt-4 flex flex-wrap justify-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm">
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
                    <button className="rounded-lg px-4 py-2 bg-transparent border border-white text-white font-bold text-sm">
                      Live Demo
                    </button>
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="mt-2 text-xs uppercase tracking-wide text-gray-100">
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
