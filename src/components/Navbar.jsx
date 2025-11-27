import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Outer Container: Fixed position, Glassmorphism background
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary/90 backdrop-blur-md z-50 border-b border-tertiary">
      
      {/* Brand Logo (Matches Footer Gradient) */}
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-mono mr-4 sm:text-4xl">
          <span className="text-textLight">M.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            Milton
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {['About', 'Work', 'Contact'].map((item) => (
            <li key={item} className="p-2 cursor-pointer text-textDim hover:text-accent transition-colors duration-300 font-medium text-lg">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer text-textLight hover:text-accent z-50">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-full bg-secondary border-r border-tertiary ease-in-out duration-500 z-40'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] h-full ease-in-out duration-500 z-40'
          }
        >
          {/* Mobile Logo */}
          <h1 className="text-3xl font-bold font-mono m-8 mt-10">
            <span className="text-textLight">M.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Milton
            </span>
          </h1>

          {/* Mobile Links */}
          <ul className="uppercase p-4">
            {['About', 'Work', 'Contact'].map((item) => (
              <li key={item} className="p-4 border-b border-tertiary">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setNav(false)}
                  className="text-textLight hover:text-accent transition-colors duration-300 text-xl font-bold block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;