import React from "react";
import { Button } from "./Button";
import HeroImage from "../assets/hero.jpeg";

export const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-48" id="home">
      <img
        src={HeroImage}
        alt="HeroImage"
        className="mx-auto mb-8 rounded-full w-48 h-48 object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <h1 className="text-4xl font-bold">
        I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Safid Bin Azad
        </span>
        , Programmer and Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
      I’m passionate about building intuitive, responsive, and visually appealing web applications. 
      </p>
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/13ghU4qCZJeE6xtd8khLiDBIYFXe2QUFw/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="px-8 py-3 text-lg">
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};
