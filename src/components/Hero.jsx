import React from 'react';
import heroimage from '../assets/milton_pro.png';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 mb-8 bg-black">
      <div className="col-span-1 my-auto mx-auto">
        <img
          src={heroimage}
          alt="Picture of Developer Murray Milton"
          // className="max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I&apos;m a</span> <br />
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'Problem Solver',
              1000,
              'Application Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          I’m Murray Milton—a problem-solving veteran ready to turn challenges
          into opportunities.
        </p>
        <div className="flex flex-wrap items-center">
          <a
            href={`${process.env.PUBLIC_URL}/assets/Murray_Milton_Resume.pdf`}
            download="Murray_Milton_Resume.pdf"
            className="px-6 py-3 rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact Me
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/murray-milton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white text-3xl mr-4"
          >
            <FaLinkedin size={60} className="text-blue-600" />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/murray-milton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white text-3xl"
          >
            <FaGithub size={60} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
