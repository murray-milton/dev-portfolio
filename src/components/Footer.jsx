import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-primary py-8 px-4 border-t border-tertiary">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand / Logo */}
        <div className="text-2xl font-bold font-mono">
          <span className="text-textLight">M.</span>
          {/* 🔥 MATCHING THE SUNSET GRADIENT HERE */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            Milton
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a 
            href="https://github.com/murray-milton" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textDim hover:text-accent transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/murray-milton" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-textDim hover:text-accent transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Email */}
        <p className="text-textDim text-sm font-mono">
          miltonmln357@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;