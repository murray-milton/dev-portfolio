import React, { useState } from 'react';

const experiences = [
  {
    id: 1,
    year: '2022–2025',
    label: '2022–2025',
    title: 'B.S. Software Development & Security',
    description:
      'Pursuing a Bachelor of Science in Software Development and Security at the University of Maryland Global Campus (UMGC), focusing on secure software engineering, databases, and cloud technologies. Graduating in 2025.',
  },
  {
    id: 2,
    year: '2023',
    label: '2023',
    title: 'Hack Reactor – Full Stack Software Engineering Bootcamp',
    description:
      'Completed Hack Reactor’s full-time full stack software engineering bootcamp, gaining hands-on experience in JavaScript, Python, React, Node.js, SQL, and modern development workflows while building production-style applications.',
  },
  {
    id: 3,
    year: '2023–2024',
    label: '2023–2024',
    title: 'Full Stack Developer – Independent Projects',
    description:
      'Built full stack applications including the Vaulty DLP Scanner and this developer portfolio, applying clean architecture, secure coding practices, and modern DevOps tooling.',
  },
  {
    id: 4,
    year: '2024–Present',
    label: '2024–Present',
    title: 'Software Engineering Journey',
    description:
      'Continuing to grow as a full stack developer with a focus on Python, React, cloud, and automation while targeting professional software engineering roles.',
  },
];

function Experience() {
  // Default highlight: your UMGC degree (first entry)
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="experience"
      className="max-w-[1200px] mx-auto px-5 mt-20 text-white"
    >
      <h2 className="text-3xl mb-4 font-bold primary-color">Experience</h2>
      <p className="text-gray-400 mb-10 max-w-[700px]">
        A timeline of my journey through formal education, intensive bootcamp
        training, and full stack development.
      </p>

      <div className="relative flex">
        {/* Left: Vertical timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-gray-500/60" />

          {/* Years + dots */}
          <div className="flex flex-col justify-between h-full py-4 space-y-10">
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onMouseEnter={() => setActiveId(exp.id)}
                  className="relative flex flex-col items-center my-4 focus:outline-none"
                >
                  {/* Year label */}
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-4xl font-extrabold text-white drop-shadow-md'
                        : 'text-base text-gray-300 opacity-80'
                    } mb-3`}
                  >
                    {exp.label}
                  </span>

                  {/* Dot */}
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-5 h-5 bg-orange-500 shadow-[0_0_12px_rgba(255,106,0,0.8)]'
                        : 'w-4 h-4 bg-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detail cards */}
        <div className="ml-12 flex-1 space-y-8">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveId(exp.id)}
                className={`group bg-white/5 border rounded-xl p-5 backdrop-blur-sm transition-all duration-300
                  ${
                    isActive
                      ? 'border-orange-500 bg-white/10 translate-x-1'
                      : 'border-gray-700 hover:bg-white/10 hover:translate-x-1'
                  }`}
              >
                <p className="text-xs uppercase tracking-wide text-orange-400 mb-1">
                  {exp.year}
                </p>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
