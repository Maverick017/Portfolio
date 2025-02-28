import React from 'react';

export const Input = ({ 
  label, 
  type = 'text',
  placeholder,
  className = '',
  error,
  ...props 
}) => {
  const baseStyles = "w-full p-3 rounded-lg bg-gray-800/60 border border-gray-700 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all duration-300";
  
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <Component
        type={type !== 'textarea' ? type : undefined}
        className={`${baseStyles} ${error ? 'border-red-500' : ''} ${className}`}
        placeholder={placeholder}
        rows={type === 'textarea' ? 5 : undefined}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};