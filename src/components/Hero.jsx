import React from 'react';
import heroimage from '../assets/milton_pro.png';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 mb-8">
      <div className="col-span-1 my-auto mx-auto">
        <img
          src={heroimage}
          alt="Developer Murray Milton"
          className="w-[260px] sm:w-[300px] md:w-[350px] rounded-3xl shadow-lg"
        />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          <span className="primary-color">Hi, I’m Murray.</span> <br />
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1200,
              'Problem Solver',
              1200,
              'Application Builder',
              1200,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-white"
          />
        </h1>

        <p className="text-gray-300 sm:text-lg my-6 lg:text-xl max-w-[650px]">
          U.S. military veteran turned developer, focused on building clean,
          reliable, and secure applications. I turn complex problems into 
          straightforward, scalable solutions.
        </p>

        <div className="flex flex-wrap items-center mt-4">
          <a
            href={`${process.env.PUBLIC_URL}/assets/Murray_Milton_Resume.pdf`}
            download="Murray_Milton_Resume.pdf"
            className="px-6 py-3 rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 duration-200"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl mr-4 border border-gray-400 text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:border-transparent duration-200"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/murray-milton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white mx-2 hover:opacity-80"
          >
            <FaLinkedin size={55} className="text-blue-500" />
          </a>

          <a
            href="https://github.com/murray-milton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white mx-2 hover:opacity-80"
          >
            <FaGithub size={55} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
