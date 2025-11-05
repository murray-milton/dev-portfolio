import React from 'react';
import aboutImg from '../assets/about_milton.jpeg';

function About() {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Welcome! I am a Full Stack Developer with a background in the
              military, where I developed key skills in precision, strategy, and
              adaptability. These qualities have been pivotal in my approach to
              coding and problem-solving, enabling me to deliver innovative tech
              solutions with discipline and efficiency. My experience has
              fostered a strong work ethic and leadership abilities, which I
              leverage to drive projects forward and overcome complex
              challenges. Beyond coding, I engage in music production and
              fitness, activities that underscore my commitment to continuous
              personal and professional growth. I seek opportunities with
              dynamic teams where I can contribute my problem-solving skills and
              positive mindset to transform challenges into successes. Let&apos;s
              connect and explore how we can create impactful solutions
              together.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          loading="lazy"
          width={300}
          height={300}
          alt="Milton, Full Stack Developer"
        />
      </div>
    </div>
  );
}

export default About;
