import React from 'react';

const experiences = [
  {
    id: 1,
    year: '2024 – Present',
    title: 'Software Engineering Journey',
    role: 'Aspiring Software Engineer',
    description:
      'Continuing to grow as a full stack developer with a focus on Python, React, cloud architecture, and automation while targeting professional software engineering roles.',
  },
  {
    id: 2,
    year: '2023 – 2024',
    title: 'Independent Projects',
    role: 'Full Stack Developer',
    description:
      'Built production-ready full stack applications including the Vaulty DLP Scanner and this developer portfolio. Applied clean architecture, secure coding practices (DevSecOps), and modern CI/CD tooling.',
  },
  {
    id: 3,
    year: '2023',
    title: 'Hack Reactor',
    role: 'Full Stack Software Engineering Bootcamp',
    description:
      'Completed an intensive full-time software engineering bootcamp. Gained hands-on experience in JavaScript, Python, React, Node.js, and SQL while building scalable applications in an Agile environment.',
  },
  {
    id: 4,
    year: '2022 – 2025',
    title: 'University of Maryland Global Campus',
    role: 'B.S. Software Development & Security',
    description:
      'Pursuing a Bachelor of Science focused on secure software engineering, database management, and cloud technologies. Expected graduation in 2025.',
  },
];

function Experience() {
  return (
    <div name='experience' className='w-full min-h-screen bg-primary text-textLight py-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>
            Experience
          </p>
          <p className='py-4 text-textDim'>
            {"// My academic and professional journey"}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-tertiary ml-3 md:ml-6 space-y-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-10 ml-8 relative group">
              
              {/* Timeline Dot (Glows on Hover) */}
              <div className="absolute -left-[43px] mt-1.5 w-5 h-5 rounded-full border-4 border-primary bg-tertiary transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>

              {/* Card */}
              <div className="bg-secondary p-6 rounded-lg shadow-lg border border-transparent hover:border-tertiary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-textLight group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-mono text-accent bg-primary/50 px-2 py-1 rounded border border-tertiary mt-2 sm:mt-0 w-fit">
                    {exp.year}
                  </span>
                </div>

                {/* Subtitle */}
                <h4 className="text-lg font-medium text-textDim mb-4 italic">
                  {exp.role}
                </h4>

                {/* Description */}
                <p className="text-textDim leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Experience;