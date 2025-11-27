import React from 'react';

// Assets
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import java from '../assets/Java.png';
import fastapi from '../assets/fastapi.png';
import nodejs from '../assets/nodejs.png';
import redux from '../assets/redux.png';
import python from '../assets/python.png';

function Skills() {
  // Combined data structure for cleaner mapping
  const skills = [
    { id: 1, icon: html, name: 'HTML5' },
    { id: 2, icon: css, name: 'CSS3' },
    { id: 3, icon: javascript, name: 'JavaScript' },
    { id: 4, icon: react, name: 'React' },
    { id: 5, icon: tailwind, name: 'Tailwind' },
    { id: 6, icon: nodejs, name: 'Node.js' },
    { id: 7, icon: fastapi, name: 'FastAPI' },
    { id: 8, icon: python, name: 'Python' },
    { id: 9, icon: java, name: 'Java' },
    { id: 10, icon: redux, name: 'Redux' },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-primary text-textLight py-20'>
      
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>
            Skills
          </p>
          {/* ✅ FIXED: Wrapped string in braces to handle special chars like // and ' */}
          <p className='py-4 text-textDim'>
            {"// These are the technologies I've worked with"}
          </p>
        </div>

        {/* Grid Container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8'>
          
          {skills.map(({ id, icon, name }) => (
            <div 
              key={id} 
              className='shadow-md shadow-[#040c16] bg-secondary rounded-lg hover:scale-110 duration-500 hover:shadow-accent/50 group'
            >
              {/* Icon */}
              <div className="h-20 flex items-center justify-center mt-6">
                <img 
                  className='w-16 mx-auto group-hover:animate-pulse-slow' 
                  src={icon} 
                  alt={`${name} icon`} 
                />
              </div>
              
              {/* Label */}
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