import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
      <p>
        I'm open to discussing web development projects or partnership
        opportunities.
      </p>
      <div className="mb-4 mt-8">
        <FaEnvelope className="inline-block text-green-400 mr-2" />
        <a href="mailto:youremail@example.com" className="hover:underline">
          anirsafid17@gmail.com
        </a>
      </div>
      <div className="mb-4">
        <FaPhone className="inline-block text-green-400 mr-2" />
        <span>+8801905118726</span>
      </div>
      <div className="mb-4">
        <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
        <span>Chittagong, Bangladesh</span>
      </div>
    </div>
  );
};