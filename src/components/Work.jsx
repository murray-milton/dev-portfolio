import React from 'react';
import proj1 from '../assets/proj1.svg';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

function Work() {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Checkout out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj1}
            alt="Project 1"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj2}
            alt="Project 2"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj3}
            alt="Project 3"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj4}
            alt="Project 4"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj5}
            alt="Project 5"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative"
        >
          <img
            src={proj6}
            alt="Project 6"
            className="w-full h-full object-cover"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                            justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                    font-bold text-lg"
                >
                  In Development
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Will insert other projects once completed */}
      </div>
    </div>
  );
}

export default Work;
