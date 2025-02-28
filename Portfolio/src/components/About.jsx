import React from "react";
import AboutImg from "../assets/about.jpeg";
import ScrollReveal from "./ScrollReveal";

export const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-28 relative" id="about">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-green-500/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              About Me
            </span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto">
          <ScrollReveal threshold={0.2} className="w-full md:w-2/5">
            <div className="w-full">
              <img
                src={AboutImg}
                alt="AboutImg"
                className="w-2/3 md:w-full lg:w-2/3 h-[400px] rounded-lg object-cover shadow-xl mx-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal threshold={0.3} className="w-full md:w-3/5">
            <div className="mt-0 md:mt-0">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a Computer Science student with a strong interest in
                technology and problem-solving. Currently, I'm expanding my
                skills in full-stack development, learning both frontend and
                backend technologies to build efficient and scalable web
                applications. My journey began with competitive programming in C
                and C++, which sharpened my analytical thinking and
                problem-solving abilities. Over time, I developed expertise in
                frontend development using HTML, CSS, JavaScript, and frameworks
                like Tailwind CSS and DaisyUI. With hands-on experience in React
                and Node.js, I am now deepening my knowledge of full-stack
                development. Always eager to learn and improve, I strive to
                create digital experiences that are both functional and visually
                engaging.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};