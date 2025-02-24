import React from 'react';

export const Input = ({ 
  label, 
  type = 'text',
  placeholder,
  className = '',
  ...props 
}) => {
  const baseStyles = "w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400";
  
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label className="block mb-2">
        {label}
      </label>
      <Component
        type={type !== 'textarea' ? type : undefined}
        className={`${baseStyles} ${className}`}
        placeholder={placeholder}
        rows={type === 'textarea' ? 5 : undefined}
        {...props}
      />
    </div>
  );
};