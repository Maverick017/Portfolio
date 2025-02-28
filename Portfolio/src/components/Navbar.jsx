import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/75 backdrop-blur-sm" : "bg-transparent"
      } text-white px-8 md:px-16 lg:px-24`}
    >
      <div className="container py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">Safid</a>
        </div>

        <div className="hidden md:flex items-center justify-between flex-1 pl-16">
          <div className="flex space-x-6 mx-auto">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#footer" className="hover:text-gray-400">
            Social
          </a>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </div>

          <div className="ml-6">
            <a href="#contact">
              <Button variant="primary">Contact Me</Button>
            </a>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${
      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
    }`}
          />
          <span
            className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${
      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
    }`}
          />
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col absolute top-16 left-0 right-0 bg-black/90 p-4 space-y-4 text-center`}
        >
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#footer" className="hover:text-gray-400">
            Social
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};
