import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex items-center justify-between mx-auto max-w-[1200px] h-auto p-12">
      {/* Name on the left */}
      <span className="text-xl font-bold primary-color">M.Milton</span>

      {/* Centered icons */}
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/murray-milton"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/murray-milton"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
      </div>

      {/* Email on the right */}
      <div className="text-gray-600">
        <a
          href="mailto:miltonmln357@gmail.com"
          className="hover:text-gray-500 transition-colors"
          aria-label="Send me an email"
        >
          miltonmln357@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
