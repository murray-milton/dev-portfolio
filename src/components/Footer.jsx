import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-primary py-8 px-4 border-t border-tertiary">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Logo */}
        <div className="text-2xl font-bold font-mono">
          <span className="text-textLight">M.</span>
          {/* 🔥 MATCHING THE SUNSET GRADIENT */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            Milton
          </span>
        </div>

        {/* Social Icons - UPDATED SIZE */}
        <div className="flex gap-8">
          <a 
            href="https://github.com/murray-milton" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            // ✅ CHANGED: text-2xl -> text-3xl for better visibility/touch targets
            className="text-textDim hover:text-accent transition-transform duration-300 hover:scale-110 text-3xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/murray-milton" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            // ✅ CHANGED: text-2xl -> text-3xl
            className="text-textDim hover:text-accent transition-transform duration-300 hover:scale-110 text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Email - Clickable & Styled */}
        <a 
          href="mailto:miltonmln357@gmail.com"
          className="flex items-center gap-2 text-textDim text-sm font-mono hover:text-accent transition-colors duration-300"
        >
          <FaEnvelope className="text-lg" />
          <span>miltonmln357@gmail.com</span>
        </a>

      </div>
    </div>
  );
}

export default Footer;