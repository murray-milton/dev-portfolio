import React from 'react';
import aboutImg from '../assets/about_milton.jpeg';

function About() {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>

            <p className="text-base lg:text-lg mb-4">
              I&apos;m Murray, a Full Stack Developer and U.S. military veteran
              with a passion for building clean, reliable, and secure software.
              My time in the military shaped my approach to problem-solving—
              emphasizing precision, adaptability, and follow-through—qualities
              that directly impact the way I approach development.
            </p>

            <p className="text-base lg:text-lg mb-4">
              I enjoy working across the stack, from crafting intuitive
              front-end experiences to developing robust APIs and automation
              workflows. I&apos;m continually learning new technologies and
              sharpening my skills through hands-on projects, coursework, and
              real-world problem solving.
            </p>

            <p className="text-base lg:text-lg mb-4">
              Outside of coding, I stay active through fitness and channel my
              creativity into music production—both of which keep me
              disciplined, balanced, and always striving to grow.
            </p>

            <p className="text-base lg:text-lg">
              I&apos;m currently seeking opportunities with dynamic teams where
              I can contribute as a full stack developer, continue expanding my
              cloud and automation skills, and help build impactful solutions.
              Let&apos;s connect and create something meaningful together.
            </p>
          </div>
        </div>

        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          loading="lazy"
          width={300}
          height={300}
          alt="Murray Milton, Full Stack Developer"
        />
      </div>
    </div>
  );
}

export default About;
