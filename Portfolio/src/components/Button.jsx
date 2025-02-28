import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled,
  ...props 
}) => {
  const baseStyles = "text-white transform transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600",
    secondary: "bg-gradient-to-b from-green-400 to-blue-800 hover:from-green-500 hover:to-blue-900",
    danger: "bg-gradient-to-r from-violet-400 to-red-800 hover:from-violet-500 hover:to-red-900"
  };
  
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed hover:scale-100" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};