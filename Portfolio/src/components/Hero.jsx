import React from "react";
import { Button } from "./Button";
import HeroImage from "../assets/hero.jpeg";
import ScrollReveal from "./ScrollReveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export const Hero = () => {
  return (
    <div className="bg-black min-h-screen flex items-center text-white py-20 md:py-28" id="home">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <ScrollReveal threshold={0.1}>
              <h4 className="text-gray-300 font-bold mb-2">Hello, I'm</h4>
            </ScrollReveal>
            
            <ScrollReveal threshold={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Safid Bin Azad
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
                Programmer & Full-Stack Developer
              </h2>
            </ScrollReveal>

            <ScrollReveal threshold={0.3}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                I'm passionate about creating intuitive, responsive, and visually appealing web applications that solve real-world problems.
              </p>
              
              <div className="flex space-x-6 mb-8">
                <a href="https://github.com/Maverick017" target="_blank" rel="noopener noreferrer" 
                   className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-blue-400 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <FaGithub className="relative z-10 text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/safid-bin-azad-190967250/" target="_blank" rel="noopener noreferrer" 
                   className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <FaLinkedin className="relative z-10 text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                   className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-green-600 to-blue-600 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <SiFiverr className="relative z-10 text-4xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a href="#project">
                  <Button variant="primary" className="px-8 py-3 text-lg">
                    Projects
                  </Button>
                </a>
                <a href="https://drive.google.com/file/d/1H42qL0wJWYav6_0g9YjpdPzDqBMFsT1r/view" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="px-8 py-3 text-lg">
                    Resume
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-start order-1 md:order-2">
            <ScrollReveal>
              <div className="relative">
                <img
                  src={HeroImage}
                  alt="Safid Bin Azad"
                  className="relative z-10 rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};