import React from "react";
import AboutImg from "../assets/about.jpeg";

export const About = () => {
  return (
    <div className="bg-black text-white py-28" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold md:ml-96 mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            About Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          <img
            src={AboutImg}
            alt="AboutImg"
            className="w-80 h-92 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I’m a Computer Science student with a strong interest in
              technology and problem-solving. Currently, I’m expanding my skills
              in full-stack development, learning both frontend and backend
              technologies to build efficient and scalable web applications. My
              journey began with competitive programming in C and C++, which
              sharpened my analytical thinking and problem-solving abilities.
              Over time, I developed expertise in frontend development using
              HTML, CSS, JavaScript, and frameworks like Tailwind CSS and
              DaisyUI. With hands-on experience in React and Node.js, I am now
              deepening my knowledge of full-stack development. Always eager to
              learn and improve, I strive to create digital experiences that are
              both functional and visually engaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
