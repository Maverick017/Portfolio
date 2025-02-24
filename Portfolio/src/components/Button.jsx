import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseStyles = "text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer hidden md:inline";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-blue-500",
    secondary: "bg-gradient-to-b from-green-400 to-blue-800",
    danger: "bg-gradient-to-r from-violet-400 to-red-800"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};