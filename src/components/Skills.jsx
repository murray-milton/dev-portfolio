import React from 'react';

function Skills() {
  const skills = [
    // --- Frontend ---
    { id: 1, icon: "devicon-html5-plain colored", name: 'HTML5' },
    { id: 2, icon: "devicon-css3-plain colored", name: 'CSS3' },
    { id: 3, icon: "devicon-javascript-plain colored", name: 'JavaScript' },
    { id: 4, icon: "devicon-react-original colored", name: 'React' },
    { id: 5, icon: "devicon-tailwindcss-original colored", name: 'Tailwind' },
    { id: 6, icon: "devicon-redux-original colored", name: 'Redux' },
    
    // --- Backend ---
    { id: 7, icon: "devicon-nodejs-plain-wordmark colored", name: 'Node.js' },
    { id: 8, icon: "devicon-fastapi-plain colored", name: 'FastAPI' },
    { id: 9, icon: "devicon-python-plain colored", name: 'Python' },
    { id: 10, icon: "devicon-java-plain colored", name: 'Java' },
    
    // --- Infrastructure ---
    { id: 11, icon: "devicon-postgresql-plain colored", name: 'PostgreSQL' },
    { id: 12, icon: "devicon-docker-plain colored", name: 'Docker' },
    { id: 13, icon: "devicon-git-plain colored", name: 'Git' },
    { id: 14, icon: "devicon-amazonwebservices-plain-wordmark colored", name: 'AWS' },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-primary text-textLight py-20'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>
            Skills
          </p>
          <p className='py-4 text-textDim'>
            {"// The technologies I use to build secure, scalable applications"}
          </p>
        </div>

        {/* Grid Container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8'>
          {skills.map(({ id, icon, name }) => (
            <div 
              key={id} 
              className='shadow-md shadow-[#040c16] bg-secondary rounded-lg hover:scale-110 duration-500 hover:shadow-accent/50 group flex flex-col justify-center items-center p-4'
            >
              {/* Icon Container - Now using <i> tags for DevIcon */}
              <div className="h-20 flex items-center justify-center">
                <i className={`${icon} text-6xl group-hover:animate-pulse-slow`}></i>
              </div>
              
              <p className='my-4 font-mono font-semibold text-textDim group-hover:text-white transition-colors'>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;