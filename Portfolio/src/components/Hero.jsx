import React from "react";
import HeroImage from "../assets/hero.jpeg";

export const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-32">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi
        placeat, inventore quos veritatis harum.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-violet-400 to-blue-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">Connect</button>
        <button className="bg-gradient-to-r from-violet-400 to-red-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">Resume</button>
      </div>
    </div>
  );
};
