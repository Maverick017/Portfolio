import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ContactInfo } from "./ContactInfo";
import ScrollReveal from "./ScrollReveal";

export const Contact = () => {
  return (
    <div className="bg-black text-white py-20 md:py-32" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Contact Me
            </span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <ScrollReveal threshold={0.2} className="w-full md:w-1/2">
            <ContactInfo />
          </ScrollReveal>

          <ScrollReveal threshold={0.3} className="w-full md:w-1/2">
            <div className="w-full">
              <form className="space-y-6">
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
                <Button variant="primary" className="w-full md:w-auto">
                  Send
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};