import React, { useState, useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ContactInfo } from "./ContactInfo";
import ScrollReveal from "./ScrollReveal";
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 
  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_17',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_17',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jOvmw7ZGz9Z7lR_Nl'
      );
      
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 md:py-28 relative" id="contact">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-800">
                {status === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}
                
                <Input 
                  label="Your Name" 
                  placeholder="Enter Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label="Your Message"
                  type="textarea"
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full md:w-auto py-3 px-6 flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};