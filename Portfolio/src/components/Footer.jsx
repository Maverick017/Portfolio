import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 relative" id='footer'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">ANIR</h3>
            <p className="text-gray-400">
              Computer Science student based in BD, specializing in web development.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ANIR. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 text-3xl hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 text-3xl hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/safid-bin-azad-190967250/" className="text-gray-400 text-3xl hover:text-white">
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};