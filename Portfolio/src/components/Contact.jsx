import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  return (
    <div className="bg-black text-white py-22" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <ContactInfo />
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <Input label="Your Name" placeholder="Enter Your Name" />
              <Input
                label="Email"
                type="email"
                placeholder="Enter Your Email"
              />
              <Input
                label="Message"
                type="textarea"
                placeholder="Enter Your Message"
              />
              <Button variant="primary">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
