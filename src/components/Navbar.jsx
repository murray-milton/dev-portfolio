import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-12">
      <h1 className="text-3xl font-bold primary-color">M. Milton</h1>
      <ul className="hidden md:flex">
        <li className="p-5 hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="p-5 hover:text-white">
          <a href="#work">Work</a>
        </li>
        <li className="p-5  hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden z-20">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={`${
          nav ? 'fixed left-0' : 'fixed left-[-100%]'
        } top-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500 z-10`}
      >
        <h1 className="text-3xl primary-color m-4">M. Milton</h1>
        <ul className="uppercas p-8 text-2xl">
          <li className="p-2">
            <a href="#about" onClick={() => setNav(false)}>
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#work" onClick={() => setNav(false)}>
              Work
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={() => setNav(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
