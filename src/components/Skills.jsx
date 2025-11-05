import React from 'react';
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
import '../components/skills.css';

function Skills() {
  const techStack = [
    html,
    css,
    javascript,
    tailwind,
    react,
    java,
    fastapi,
    nodejs,
    redux,
    python,
  ];
  const toolTips = [
    'HTML5 - Markup Language',
    'CSS3 - Style Sheet Language',
    'JavaScript - Programming Language',
    'Tailwind - CSS Framework',
    'React - JavaScript Library',
    'Java - Programming Language',
    'Python - Programming Language',
    'FastAPI - Web Framework',
    'Node.Js',
  ];

  return (
    <div className="skills-container">
      <h2 className="tech-stack-title">My Tech Stack</h2>
      {techStack.map((tech, index) => (
        <img
          key={`tech-stack-item-${index}`}
          src={tech}
          alt={toolTips[index]}
          title={toolTips[index]} 
          className="orbit-element"
          style={{
            '--orbit-index': index,
            '--total-elements': techStack.length,
            '--orbit-duration': `${techStack.length * 5}s`,
            '--size': '120px',
            '--distance': '230px',
          }}
        />
      ))}
    </div>
  );
}

export default Skills;
