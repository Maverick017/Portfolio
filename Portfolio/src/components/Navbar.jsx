import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/75 backdrop-blur-sm" : "bg-transparent"
      } text-white px-8 md:px-16 lg:px-24`}
    >
      <div className="container py-4 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          <a href="#home">Safid</a>{" "}
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <Button variant="primary">Contact Me</Button>
      </div>
    </nav>
  );
};